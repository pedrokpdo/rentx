import React from 'react';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'
import { useNavigation, useRoute } from '@react-navigation/native';


import { CarImages, Container, Content, Header, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer } from './styles';
import { Button } from '../../components/Button';



export function CarDetails() {
    const navigation = useNavigation()
    const route = useRoute()
    const { car } = route.params

    function handleConfirmRental() {
        navigation.navigate('Scheduling')
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
                        <Acessory name={accessory.name} icon={SpeedSvg} key={accessory.type}/>
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