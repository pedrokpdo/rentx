import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { ChangePasswordVisibility } from '../Input/styles'
import { Container, IconContainer, InputText } from './styles'


interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({ iconName, placeholder }: InputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const theme = useTheme()

    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState)
    }

    return (
        <Container>
            <IconContainer>
                <Feather name={iconName} size={24} color={theme.colors.text_detail} />
            </IconContainer>
            <InputText placeholder={placeholder} secureTextEntry={isPasswordVisible}/>
            <ChangePasswordVisibility onPress={handlePasswordVisibilityChange}>
                <IconContainer>
                    <Feather name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color={theme.colors.text_detail} />
                </IconContainer>
            </ChangePasswordVisibility>
        </Container>
    )
}