import React from 'react';

import { Container, Title } from './styles';

interface Props {
    title: string;
    color?: string;
    onPress: any;
    colorText?: any;
}

export function Button({ title, color, onPress, colorText }: Props) {
    return (
        <Container onPress={onPress} color={color}>
            <Title colorText={colorText}>{title}</Title>
        </Container>
    )
}