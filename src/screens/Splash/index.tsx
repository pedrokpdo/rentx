import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container } from './styles'
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { Button } from 'react-native'

export function Splash() {
    const animation = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: animation.value}
            ]
        }
    })
    function handleAnimationPosition() {
        animation.value = Math.random() * 500
    }

    return (
        <Container>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Button title='Mover' onPress={handleAnimationPosition}/>
        </Container>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})