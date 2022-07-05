import React, { useEffect, useState } from 'react';
import {  StatusBar } from 'react-native';
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { CardCar } from '../../components/CardCar';
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api'
import { useTheme } from 'styled-components';
import { LoadAnimation } from '../../components/LoadAnimation';


export function Home() {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        async function fetchCars() {
            const response = await api.get('/cars');
            setCars(response.data)
            console.log(response)
            setLoading(false)
        }
        fetchCars()
    }, [])


    function handleCarDetails(car): any {
        navigation.navigate('CarDetails', { car })
    }

    

    return (
        <Container>
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
            <Header>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)} />
                    {
                        !loading &&
                        <TotalCars>
                            Total de {cars.length} carros
                        </TotalCars>
                    }
                </HeaderContent>
            </Header>
            {loading ? <LoadAnimation /> :
                <CarList
                    data={cars}
                    keyExtractor={item => (item.id)}
                    renderItem={({ item }) =>
                        <CardCar data={item} onPress={() => handleCarDetails(item)} />
                    }

                />

            }
           
        </Container>
    )
}