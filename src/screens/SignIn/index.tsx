import React, { useState } from 'react'
import { Container, Header, Title, SubTitle, Footer, Form } from './styles'
import { StatusBar, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { Button } from '../../components/Button'
import { useTheme } from 'styled-components'
import { Input } from '../../components/Input'
import { PasswordInput } from '../../components/PasswordInput'
import * as Yup from 'yup'


export function SignIn() {

    const theme = useTheme();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignIn() {
        try {
            console.log('email: ',email)
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup.string()
                .required('Senha obrigatória')


            })
            await schema.validate({ email, password })
            Alert.alert('Tudo Certo')
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message);
            } else {
                Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, verifique as credenciais')
            }
        }

    }


    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
                    <Header>
                        <Title>Estamos {`\n`}quase lá</Title>
                        <SubTitle>Faça seu login para começar{`\n`}uma experiencia incrivel.</SubTitle>

                    </Header>
                    <Form>
                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            setEmail={setEmail}
                            value={email}
                        />
                        <PasswordInput
                            iconName='lock'
                            placeholder='Senha'
                            setPassword={setPassword}
                            value={password}
                        />
                    </Form>
                    <Footer>
                        <Button title='login' onPress={handleSignIn} />
                        <Button title='Criar conta Gratuita' onPress={handleSignIn} colorText={theme.colors.shape_dark} color={theme.colors.background_secondary} />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback >
        </KeyboardAvoidingView>
    )
}