import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import SpeedSvg from '../../assets/speed.svg'
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessory } from '../../utils/getAccessory'


import { CarImages, Container, Content, Header, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer } from './styles';
import { Button } from '../../components/Button';


export function CarDetails() {
    const navigation = useNavigation()
    const route = useRoute()
    const { car } = route.params

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
            <Header>
                <BackButton onPress={handleBack} />
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
                        <Period>{car.rent.period}</Period>
                        <Price>{`R$ ${car.rent.price}`}</Price>
                    </Rent>
                </Details>
                <Acessories>
                    {
                    car.accessories.map(accessory => (
                        <Accessory name={accessory.name} icon={getAccessory(accessory.type)} key={accessory.type}/>
                    ))
                    }
                </Acessories>
                <About>
                    {car.about}
                </About>
            </Content>
            <Footer>
                <Button title='botao' onPress={handleConfirmRental} />
            </Footer>
        </Container>
    )
}