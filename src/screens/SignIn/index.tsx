import React from 'react'
import { Container, Header, Title, SubTitle, Footer } from './styles'
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { useTheme } from 'styled-components'


export function SignIn() {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
            <Header>
                <Title>Estamos {`\n`}quase lá</Title>
                <SubTitle>Faça seu login para começar{`\n`}uma experiencia incrivel.</SubTitle>
                
            </Header>
            <Footer>
                <Button title='login' onPress={() => {}}/>
                <Button title='Criar conta Gratuita' onPress={() => {}} colorText={theme.colors.shape_dark} color={theme.colors.background_secondary}/>
            </Footer>
        </Container>
    )
}