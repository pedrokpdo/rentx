import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Calendar as CustomCalendar, LocaleConfig, CalendarProps } from 'react-native-calendars'
import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro,', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab',],
    today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br';

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number
    timestamp: number;
}



export function Calendar({ markedDates, onDayPress }: CalendarProps) {
    const theme = useTheme()
    return (
        <CustomCalendar
            markingType='period'
            markedDate={markedDates}
            minDate={new Date()}
            onDayPress={onDayPress}
            firstDay={1}
            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10
            }}

            theme={{
                textDayFontFamily: theme.fonts.primary_400,
                textDayHeaderFontFamily: theme.fonts.primary_500,
                textDayHeaderFontSize: 10,
                textMonthFontSize: 20,
                textMonthFontFamily: theme.fonts.secondary_600,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}
            renderArrow={(direction) =>
                <Feather name={direction === 'left' ? 'chevron-left' : 'chevron-right'} size={24} color={theme.colors.text} />
            } />
    )
}

export {DayProps}