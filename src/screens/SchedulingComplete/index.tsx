import React from 'react';
import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import { StatusBar, useWindowDimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native'


import { Container, Content, Footer, Message, Title } from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
export function SchedulingComplete() {
    const navigation = useNavigation()
    function handleConfirm () {
        navigation.navigate('Home')
    }
    const {width} = useWindowDimensions()
    return (
        <Container>
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent'/>
            <LogoSvg width={width}/>
            <Content>
                <DoneSvg width={80} height={80}/>
                <Title>Carro Alugado</Title>
                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionaria da RENTX {'\n'}
                    para pegar seu automóvei
                </Message>
            </Content>
            <Footer>
                <ConfirmButton onPress={handleConfirm} title='ok'/>
            </Footer>
        </Container>
    )
}