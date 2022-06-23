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


import { CarImages, Container, Content, Header, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer } from './styles';
import { Button } from '../../components/Button';
export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={['data:image/jpeg;base64,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']} />
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborguini</Brand>
                        <Name>Muracan</Name>
                    </Description>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>
                <Acessories>
                    <Acessory name='380Km/h' icon={SpeedSvg}/>
                    <Acessory name='3.2s' icon={AccelerationSvg}/>
                    <Acessory name='800 HP' icon={ForceSvg}/>
                    <Acessory name='Gasolina' icon={GasolineSvg}/>
                    <Acessory name='Auto' icon={ExchangeSvg}/>
                    <Acessory name='2 Pessoas' icon={PeopleSvg}/>
                </Acessories>
                <About>
                    Este automóvel desportivo. surgiu do lendario touro de lide indultado
                    na praça real Maestrand de Servilla. é um belissimo carro pra quem gosta de acelerar
                </About>
            </Content>
            <Footer>
                <Button title='botao' />
            </Footer>
        </Container>
    )
}