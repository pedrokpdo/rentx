import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ButtonProps extends RectButtonProps {
    color: string;
}

interface ButtonPropts extends RectButtonProps {
    colorText?: string;
}
export const Container = styled.TouchableOpacity<ButtonProps>`
    width: 100%;
    height: 50px;
    padding: 8px;
    align-items:center;
    justify-content:center;
   
    background-color: ${({ color, theme }) => color ? color : theme.colors.main};
    margin-bottom: 8px;
`

export const Title = styled.Text<ButtonPropts>`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size:  ${RFValue(15)}px;
    color: ${({ theme, colorText }) => colorText ? colorText : theme.colors.shape};
`