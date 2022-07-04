import React from 'react'
import { Container, Header, Title, SubTitle, Footer, Form } from './styles'
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { useTheme } from 'styled-components'
import { Input } from '../../components/Input'
import { PasswordInput } from '../../components/PasswordInput'


export function SignIn() {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
            <Header>
                <Title>Estamos {`\n`}quase lá</Title>
                <SubTitle>Faça seu login para começar{`\n`}uma experiencia incrivel.</SubTitle>

            </Header>
            <Form>
                <Input iconName='mail' placeholder='E-mail' keyboardType='email-address' autoCapitalize='none' autoCorrect={false}/>
                <PasswordInput iconName='lock' placeholder='Senha'/>
            </Form>
            <Footer>
                <Button title='login' onPress={() => { }} />
                <Button title='Criar conta Gratuita' onPress={() => { }} colorText={theme.colors.shape_dark} color={theme.colors.background_secondary} />
            </Footer>
        </Container>
    )
}