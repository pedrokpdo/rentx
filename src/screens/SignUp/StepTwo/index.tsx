import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { useTheme } from 'styled-components'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { PasswordInput } from '../../../components/PasswordInput'
import { Container, Form, FormTitle, Header, Steps, SubTitle, Title } from './styles'

export function StepTwo() {
    const theme = useTheme()
    const navigation = useNavigation()
    function handleBack() {
        navigation.goBack()
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
                        
                    />
                    <PasswordInput
                        iconName='lock'
                        placeholder='Repetir Senha'
                    />
                </Form>
                <Button
                    title='Cadastrar'
                    color={theme.colors.success}
                    
                />
            </Container>
        </KeyboardAvoidingView>

    )
}