import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView } from 'react-native'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Container, Form, FormTitle, Header, Steps, SubTitle, Title } from './styles'
import * as Yup from 'yup'
import { useAuth } from '../../../hooks/auth'


export function StepOne() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [driverLicense, setDriverLicense] = useState('')
    
    const navigation = useNavigation()
    const {user} = useAuth()
    console.log('Usuário au' ,user)
    
    function handleBack() {
        navigation.goBack()
    }

    async function handleNextStep() {
        try {
            const schema = Yup.object({
                name: Yup.string()
                .required('Nome é obrigatório'),
                email: Yup.string()
                .email('E-mail inválido')
                .required('E-mail obrigatório'),
                driverLicense: Yup.string()
                .required('CNH é obrigatória')
            })
            const data = {name, email, driverLicense}
            await schema.validate(data);

            navigation.navigate('StepTwo', {user: data})
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                return Alert.alert('Opa', error.message)
            }
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
                    <FormTitle>1.Dados</FormTitle>
                    <Input
                        iconName='user'
                        placeholder='Nome'
                        onChangeText={setName}
                        value={name}

                    />
                    <Input
                        iconName='mail'
                        placeholder='E-mail'
                        onChangeText={() => { }}
                        keyboardType='email-address'
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Input
                        iconName='credit-card'
                        placeholder='CNH'
                        onChangeText={() => { }}
                        keyboardType='numeric'
                        onChangeText={setDriverLicense}
                        value={driverLicense}
                    />
                </Form>
                <Button
                    title='Próximo'
                    onPress={handleNextStep}
                />
            </Container>
        </KeyboardAvoidingView>

    )
}