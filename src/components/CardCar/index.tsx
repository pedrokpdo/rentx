import React from 'react';
import GasolineSvg from '../../assets/gasoline.svg'
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessory } from '../../utils/getAccessory';
import { About, Brand, CardImage, Container, Details, Name, Period, Price, Rent, Type } from './styles';

interface Props {
  data: CarDTO;
  onPress: any;
}

export function CardCar({data, onPress}:Props) {
  const MotorIcon = getAccessory(data.fuel_type)
  return (
    <Container onPress={onPress}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>

        </About>
      </Details>
      <CardImage source={{ uri: data.thumbnail }} />
    </Container>
  )
}