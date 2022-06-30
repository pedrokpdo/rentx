import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessory } from '../../utils/getAccessory'
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


import { CarImages, Container, Header, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer } from './styles';
import { Button } from '../../components/Button';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';


export function CarDetails() {
    const theme = useTheme()
    const navigation = useNavigation()
    const route = useRoute()
    const { car } = route.params
    const scrollY = useSharedValue(0)
    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y
        console.log(event.contentOffset.y)
    })
    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 200],
                [200, 70],
                Extrapolate.CLAMP
            )
        }
    })

    const sliderCarsStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 150],
                [1, 0],
                Extrapolate.CLAMP
            )
        }
    })

    function handleConfirmRental() {
        navigation.navigate('Scheduling', {
            car
        })
    }
    function handleBack() {
        navigation.goBack();
    }
    return (
        <Container>
            <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
            <Animated.View style={[
                headerStyleAnimation,
                styles.header,
                { backgroundColor: theme.colors.background_secondary }
            ]}>
                <Header>
                    <BackButton onPress={handleBack} />
                </Header>
                <Animated.View style={sliderCarsStyleAnimation}>
                    <CarImages>
                        <ImageSlider imagesUrl={car.photos} />

                    </CarImages>
                </Animated.View>

            </Animated.View>
            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: getStatusBarHeight() + 160,
                }}
                onScroll={scrollHandler}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>
                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>{`R$ ${car.rent.price}`}</Price>
                    </Rent>
                </Details>
                <Acessories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory name={accessory.name} icon={getAccessory(accessory.type)} key={accessory.type} />
                        ))
                    }
                </Acessories>
                <About>
                    {car.about}
                </About>
            </Animated.ScrollView>
            <Footer>
                <Button title='botao' onPress={handleConfirmRental} />
            </Footer>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1
    },
    back: {
        marginTop: 24
    }
})