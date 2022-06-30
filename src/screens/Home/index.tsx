import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar } from 'react-native';
import { CarList, Container, Header, HeaderContent, MyCarsButton, TotalCars } from './styles';
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { CardCar } from '../../components/CardCar';
import { Load } from '../../components/Load';
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { LoadAnimation } from '../../components/LoadAnimation';


export function Home() {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()
    const theme = useTheme()

    useEffect(() => {
        async function fetchCars() {
            const response = await api.get('/cars');
            setCars(response.data)
            console.log(response)
            setLoading(false)
        }
        fetchCars()
    }, [])

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    })

    function handleCarDetails(car): any {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars(car): any {
        navigation.navigate('MyCars')
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
            <MyCarsButton onPress={handleOpenMyCars}>
                <Ionicons name='ios-car-sport' size={32} color={theme.colors.shape} />
            </MyCarsButton>
        </Container>
    )
}