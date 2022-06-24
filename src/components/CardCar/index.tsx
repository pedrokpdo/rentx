import React from 'react';
import GasolineSvg from '../../assets/gasoline.svg'
import { About, Brand, CardImage, Container, Details, Name, Period, Price, Rent, Type } from './styles';

interface CardData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  },
  thumbnail: string;
}

interface Props {
  data: CardData;
}

export function CardCar({data, onPress}:any) {
  return (
    <Container onPress={onPress}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <GasolineSvg />
          </Type>

        </About>
      </Details>
      <CardImage source={{ uri: data.thumbnail }} />
    </Container>
  )
}