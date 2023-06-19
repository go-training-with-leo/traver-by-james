import {
  Button,
  Footer,
  Input,
  WrapperContent,
  Text,
  KeyboardView,
  useMergeState,
  useAppDispatch,
  useAppSelector,
  Loading,
} from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { emailValidation, handleAuthException } from '@/utils/helpers';
import { forgotPassword, loadingSelector } from '@/global/redux';
import { Alert } from 'react-native';

export const VerifyEmail = () => {
  const [state, setState] = useMergeState({
    email: '',
    error: false,
  });

  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation('auth');
  const loading = loadingSelector();
  const auth = useAppSelector(state => state.auth);

  const handleInputChange = ({ text }) => {
    setState({ email: text, error: false });
  };

  const handleSubmit = () => {
    if (emailValidation(state.email)) {
      return dispatch(
        forgotPassword({
          email: state.email.trim(),
          onSuccess: () => {
            Alert.alert(
              'Email reset password is sent. Please check your email',
              '',
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Login'),
                },
              ],
            );
          },
          onFailure: () => {
            setState({ error: true });
            auth.error && handleAuthException(auth.error, t);
          },
        }),
      );
    }
  };
  return (
    <KeyboardView>
      {loading ? (
        <Loading />
      ) : (
        <WrapperContent>
          <Text
            title={t('screen.verifyEmail.subTitle')}
            style={style.subTitle}
          />
          <Text title={t('screen.verifyEmail.title')} style={style.title} />
          <Input
            label={t('input.email.label')}
            onChangeText={handleInputChange}
          />
          {state.error && (
            <Text title={t('input.email.error')} style={style.error} />
          )}
          <Footer>
            <Button title={t('button.submit')} onPress={handleSubmit} />
          </Footer>
        </WrapperContent>
      )}
    </KeyboardView>
  );
};
