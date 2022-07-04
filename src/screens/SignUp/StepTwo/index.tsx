import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView } from 'react-native'
import { useTheme } from 'styled-components'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { PasswordInput } from '../../../components/PasswordInput'
import { Container, Form, FormTitle, Header, Steps, SubTitle, Title } from './styles'

interface Params {
    user: {
        name: string;
        email: string;
        driverLicense: string;
    }
}

export function StepTwo() {
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')


    const theme = useTheme()
    const route = useRoute()

    const {user} = route.params as Params;

    const navigation = useNavigation()
    function handleBack() {
        navigation.goBack()
    }

    function handleRegister() {
        if(!password || !passwordConfirm) {
            return Alert.alert('Informe a senha e a confirmação.')
        }
        if(password != passwordConfirm) {
            return Alert.alert('As senhas não sao iguais.')
        }
    }
    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <Container>
                <Header>
                    <BackButton onPress={handleBack} />
                    <Steps>
                        <Bullet active />
                        <Bullet active={false} />
                    </Steps>
                </Header>
                <Title>Crie sua{'\n'}conta </Title>
                <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>
                <Form>
                    <FormTitle>2.Senha</FormTitle>
                    <PasswordInput
                        iconName='lock'
                        placeholder='Senha'
                        onChangeText={setPassword}
                        value={password}
                        
                    />
                    <PasswordInput
                        iconName='lock'
                        placeholder='Repetir Senha'
                        onChangeText={setPasswordConfirm}
                        value={passwordConfirm}
                    />
                </Form>
                <Button
                    title='Cadastrar'
                    color={theme.colors.success}
                    onPress={handleRegister}
                    
                />
            </Container>
        </KeyboardAvoidingView>

    )
}