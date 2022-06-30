import React from 'react'
import { Container } from './styles'
import LottieView from 'lottie-react-native'

import loadingCar from '../../assets/loadingCar.json'

export function LoadAnimation() {

    return (
        <Container>
            <LottieView resizeMode='contain' loop source={loadingCar} autoPlay style={{height: 200}} />
        </Container>
    )
}