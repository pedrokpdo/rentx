import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { ChangePasswordVisibility } from '../Input/styles'
import { Container, IconContainer, InputText } from './styles'


interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
    value?: string;
    setPassword: any;
}

export function PasswordInput({ iconName, placeholder, value, setPassword }: InputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const theme = useTheme()

    function handleInputFocus() {
        setIsFocused(true)
    }


    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!value)
    }

    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState)
    }

    return (
        <Container>
            <IconContainer isFocused={isFocused}>
                <Feather
                    name={iconName}
                    size={24}
                    color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}

                />
            </IconContainer>
            <InputText
                isFocused={isFocused}
                placeholder={placeholder}
                secureTextEntry={isPasswordVisible}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={setPassword}
            />
            <ChangePasswordVisibility onPress={handlePasswordVisibilityChange}>
                <IconContainer
                    isFocused={isFocused}
                >
                    <Feather
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color={theme.colors.text_detail}
                    />
                </IconContainer>
            </ChangePasswordVisibility>
        </Container>
    )
}