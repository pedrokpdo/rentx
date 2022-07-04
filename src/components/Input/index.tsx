import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { Container, IconContainer, InputText } from './styles'


interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
    onChangeText: any;
}

export function Input({ iconName, placeholder, value, onChangeText }: InputProps) {
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
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={onChangeText}
            />
        </Container>
    )
}