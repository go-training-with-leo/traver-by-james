import { Alert } from 'react-native';
import { authErrors } from '../constants';
import { TFunction } from 'i18next';

export const handleAuthException = (
  error: string,
  t: TFunction<'auth', undefined, 'auth'>,
) => {
  switch (error) {
    case authErrors.userNotFound:
      Alert.alert(t('exception.userNotFound'));
      break;
    case authErrors.wrongPassword:
      Alert.alert(t('exception.wrongPassword'));
      break;
    case authErrors.existedEmail:
      Alert.alert(t('exception.existedEmail'));
      break;
    case authErrors.invalidEmail:
      Alert.alert(t('exception.invalidEmail'));
      break;
    case authErrors.weekPassword:
      Alert.alert(t('exception.weekPassword'));
      break;
    case authErrors.network:
      Alert.alert(t('exception.network'));
      break;
    case authErrors.cancel:
      break;
    default:
      Alert.alert('Login failed! Please try again!');
      break;
  }
};
