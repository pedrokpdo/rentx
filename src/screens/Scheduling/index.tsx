import React, { useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import ArrowSvg from '../../assets/arrow.svg'
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from './styles';
import { View } from 'react-native';
import { StatusBar, Alert } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar, DayProps } from '../../components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native'
import { generateInterval } from '../../components/Calendar/generateInterval';
import {format} from 'date-fns'
import {getPlatformDate} from '../../utils/getPlatformDate'

interface RentalPeriod {
    startFormated: string;
    endFormated: string;
}


export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDates, setMarkedDates] = useState({})
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
    const theme = useTheme()
    const navigation = useNavigation()
    const route = useRoute()
    const { car } = route.params
    function handleConfirmRental() {
        if(!rentalPeriod.startFormated || !rentalPeriod.endFormated){
            Alert.alert('selecione o periodo')
        }else{
            navigation.navigate('SchedulingDetails'), {
                car,
                dates: Object.keys(markedDates)
            }
        }
    }
    function handleBack() {
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date

        if (start.timestamp > end.timestamp) {
            start = end
            end = start
        }
        setLastSelectedDate(end)
        const interval = generateInterval(start, end)
        setMarkedDates(interval)
        const firstDate = Object.keys(interval)[0]
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1]
        setRentalPeriod({
            startFormated: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormated: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
        })
    }

    return (
        <Container>
            <Header>
                <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
                <View style={{ marginTop: 24 }}>
                    <BackButton onPress={handleBack} color={theme.colors.shape} />
                </View>
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel. {'\n'}
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>de</DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormated}>{rentalPeriod.startFormated}</DateValue>
                    </DateInfo>
                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormated}>{rentalPeriod.endFormated}</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>
            <Footer>
                <Button onPress={handleConfirmRental} title='Confirmar' />
            </Footer>
        </Container>
    )
}