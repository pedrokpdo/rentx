import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import SpeedSvg from '../../assets/speed.svg'
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessory } from '../../utils/getAccessory'
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


import { CarImages, Container, Header, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer } from './styles';
import { Button } from '../../components/Button';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar } from 'react-native';


export function CarDetails() {
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
            <Animated.View style={[headerStyleAnimation]}>
                <Header>
                    <BackButton onPress={handleBack} />
                </Header>
                <CarImages>
                    <ImageSlider imagesUrl={car.photos} />
                </CarImages>

            </Animated.View>
            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: getStatusBarHeight(),
                }}
                onScroll={scrollHandler}
                showsVerticalScrollIndicator={false}
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
                    {car.about}
                    {car.about}
                    {car.about}
                </About>
            </Animated.ScrollView>
            <Footer>
                <Button title='botao' onPress={handleConfirmRental} />
            </Footer>
        </Container>
    )
}