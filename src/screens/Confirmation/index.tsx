import React from 'react';
import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import { StatusBar, useWindowDimensions } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import { Container, Content, Footer, Message, Title } from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';

interface Params {
    title: string;
    message: string;
    nextScreenRoute: string;
}

export function Confirmation() {
    const navigation = useNavigation()
    const route = useRoute()
    const {title, message, nextScreenRoute} = route.params as Params
    function handleConfirm () {
        navigation.navigate(nextScreenRoute)
    }
    const {width} = useWindowDimensions()
    return (
        <Container>
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent'/>
            <LogoSvg width={width}/>
            <Content>
                <DoneSvg width={80} height={80}/>
                <Title>{title}</Title>
                <Message>
                   {message}
                </Message>
            </Content>
            <Footer>
                <ConfirmButton onPress={handleConfirm} title='OK'/>
            </Footer>
        </Container>
    )
}