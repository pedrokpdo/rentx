import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, StatusBar, View } from 'react-native'
import { useTheme } from 'styled-components'
import { BackButton } from '../../components/BackButton'
import { CardCar } from '../../components/CardCar'
import { api } from '../../services/api'
import { Container, Content, Header, SubTitle, Title, Appointments, AppointmentsQuatity, AppointmentsTitle } from './styles'

export function MyCars() {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)

    const theme = useTheme()

    const navigation = useNavigation()

    function handleBack() {
        navigation.goBack()
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('schedules_byuser?user_id=1')
                setCars(response.data)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchCars()
    }, [])

    return (
        <Container>
            <Header>
                <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
                <View style={{ marginTop: 24 }}>
                    <BackButton onPress={handleBack} color={theme.colors.shape} />
                </View>
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel. {'\n'}
                </Title>
                <SubTitle>Conforto, segurança e praticidade</SubTitle>
            </Header>
            <Content>
                <Appointments>
                    <AppointmentsTitle>Agendamentos Feitos</AppointmentsTitle>
                    <AppointmentsQuatity>05</AppointmentsQuatity>
                </Appointments>
                <FlatList
                    data={cars}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardCar data={item.car}/>
                    )}
                />
            </Content>
        </Container>
    )
}