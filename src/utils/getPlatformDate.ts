import { addDays } from 'date-fns';
import { Platform } from 'react-native';

function getPlatformDate(date: Date): Date {
  // if (Platform.OS === 'ios') {
  //   return addDays(date, 1);
  // }
  return addDays(date, 1);
  // return addDays(date, 1); para solucionar no android também
}

export { getPlatformDate };