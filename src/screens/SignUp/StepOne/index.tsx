import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {  KeyboardAvoidingView } from 'react-native'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Container, Form, FormTitle, Header, Steps, SubTitle, Title } from './styles'

export function StepOne() {
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
                        <FormTitle>1.Dados</FormTitle>
                        <Input
                            iconName='user'
                            placeholder='Nome'
                            onChangeText={() => { }}
                        />
                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            onChangeText={() => { }}
                        />
                        <Input
                            iconName='credit-card'
                            placeholder='CNH'
                            onChangeText={() => { }}
                        />
                    </Form>
                    <Button
                        title='Próximo'
                    />
                </Container>
        </KeyboardAvoidingView>

    )
}