import React, { useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import ArrowSvg from '../../assets/arrow.svg'
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from './styles';
import { View } from 'react-native';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar, DayProps } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native'
import { generateInterval } from '../../components/Calendar/generateInterval';


export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDates, setMarkedDates] = useState({})
    const theme = useTheme()
    const navigation = useNavigation()
    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails')
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
                        <DateValue selected={false}>18/06/2021</DateValue>
                    </DateInfo>
                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue selected={false}>18/06/2021</DateValue>
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