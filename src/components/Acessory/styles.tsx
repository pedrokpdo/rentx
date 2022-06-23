import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 118px;
    height: 102px;
    justify-content: center;
    align-items: center;

    background-color: ${({theme})=>theme.colors.background_primary};
    padding: 8px;
    margin-bottom: 4px;
    
`

export const Name = styled.Text`
    font-family: ${({theme})=>theme.fonts.primary_500};
    color: ${({theme})=>theme.colors.text};
    font-size: ${RFValue(13)}px;
`

