import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import ArrowSvg from '../../assets/arrow.svg'
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from './styles';
import { View } from 'react-native';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
export function Scheduling() {
    const theme = useTheme()
    return (
        <Container>
            <Header>
                <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
                <View style={{marginTop:24}}>
                    <BackButton onPress={() => { }} color={theme.colors.shape} />
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
                <Calendar/>
            </Content>
            <Footer>
                <Button title='Confirmar'/>
            </Footer>
        </Container>
    )
}