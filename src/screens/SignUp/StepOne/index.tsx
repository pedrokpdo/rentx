import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Container, Form, FormTitle, Header, Steps, SubTitle, Title } from './styles'

export function StepOne() {
    const navigation = useNavigation()
    function handleBack() {
        navigation.goBack()
    }
    return (
        <Container>
            <Header>
                <BackButton />
                <Steps>
                    <Bullet active />
                    <Bullet active={false} />
                </Steps>
            </Header>
            <Title>Crie sua{'\n'}conta </Title>
            <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>
            <Form>
                <FormTitle>1.Dados</FormTitle>
            </Form>
        </Container>
    )
}