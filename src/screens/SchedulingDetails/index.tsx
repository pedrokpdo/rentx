import React, { useEffect, useState } from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components'
import { CarImages, Container, Content, Header, Details, Description, Brand, Name, Rent, Period, Price, Accessories, Footer, RentalPeriod, CalendarIcon, DateInfo, DateTitle, DateValue, RentalPrice, RentalPriceDetails, RentalPriceLabel, RentalPriceQuota, RentalPriceTotal } from './styles';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessory } from '../../utils/getAccessory';
import { getPlatformDate } from '../../utils/getPlatformDate';
import {format} from 'date-fns'
import { api } from '../../services/api';
import { Alert } from 'react-native';

interface RentalPeriod {
    start: string;
    end: string;
}

interface Params {
    car: any;
    dates: any;
}

export function SchedulingDetails() {
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
    const theme = useTheme()
    const navigation = useNavigation();
    const route = useRoute()
    const { car, dates } = route.params as Params
    const rentTotal = Number(dates.length * car.price)
    async function handleConfirmRental() {
        const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);
        const unavailable_dates = [
            ...schedulesByCar.data.unavailable_dates,
            ...dates
        ]

        await api.post('schedules_byuser', {
            user_id: 1,
            car,
            startDate: format(getPlatformDate(new Date (dates[0])),'dd/MM/yyyy'),
            endDate: format(getPlatformDate(new Date (dates[dates.length - 1])),'dd/MM/yyyy')
        })

        api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates
        })
        .then(() =>   navigation.navigate('Confirmation', {
            nextScreenRoute: 'Home',
            title: 'Carro alugado',
            message: `Agora você só precisa ir\naté a concessionária da RENTX\nPegar o seu automovel`
        }))
        .catch(() => Alert.alert('Não foi possivel confimar o agendamento'))
    }

    useEffect(()=>{
        setRentalPeriod({
            start: format(getPlatformDate(new Date (dates[0])),'dd/MM/yyyy'),
            end: format(getPlatformDate(new Date (dates[dates.length - 1])),'dd/MM/yyyy')
        })
    },[])

    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={car.photos} />
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>
                    <Rent>
                        <Period>{car.period}</Period>
                        <Price>R$ {car.price}</Price>
                    </Rent>
                </Details>
                <Accessories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory name={accessory.name} icon={getAccessory(accessory.type)} key={accessory.type} />
                        ))
                    }
                </Accessories>
                <RentalPeriod>
                    <CalendarIcon>
                        <Feather name='calendar' size={RFValue(24)} color={theme.colors.shape} />
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>de</DateTitle>
                        <DateValue>{rentalPeriod.start}</DateValue>
                    </DateInfo>
                    <DateInfo>
                        <DateTitle>até</DateTitle>
                        <DateValue>{rentalPeriod.end}</DateValue>
                    </DateInfo>
                </RentalPeriod>
                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>{`R$ ${car.price} x${dates.length} diárias`}</RentalPriceQuota>
                        <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>
            <Footer>
                <Button title='botao' onPress={handleConfirmRental} />
            </Footer>
        </Container >
    )
}