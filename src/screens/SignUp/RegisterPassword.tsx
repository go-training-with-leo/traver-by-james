import {
  Input,
  WrapperContent,
  Text,
  KeyboardView,
  useMergeState,
  ProgressFooter,
  Switch,
  FlexView,
  useAppDispatch,
  useAppSelector,
  Loading,
} from '@/components';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/utils/types';
import { View } from 'react-native';
import { handleAuthException, passwordValidation } from '@/utils/helpers';
import { loadingSelector, signUp } from '@/global/redux';

type RegisterPasswordProps = NativeStackScreenProps<
  RootStackParamList,
  'RegisterPassword'
>['route'];

export const RegisterPassword = () => {
  const { t } = useTranslation('auth');
  const navigation = useNavigation();
  const route = useRoute<RegisterPasswordProps>();
  const dispatch = useAppDispatch()
  const auth = useAppSelector(state=> state.auth)
  const loading = loadingSelector()

  const [state, setState] = useMergeState({
    password: '',
    error: false,
    switchValue: false,
  });

  

  const isPasswordValid = useMemo(() => {
    if (state.switchValue && !passwordValidation(state.password)) {
      return false;
    }
    return true;
  }, [state.password, state.switchValue]);

  const handleSubmit = () => {
    if (isPasswordValid) {
      dispatch(
        signUp({
          email: route.params.email,
          firstName: route.params.firstName,
          lastName: route.params.lastName,
          password: state.password,
          onSuccess: () => navigation.navigate('VerifyOTP'),
          onFailure: () => {
            auth.error && handleAuthException(auth.error, t);}
        }),
      );
    } else setState({ error: true });
  }

  const handlePasswordChange = useCallback(
    ({ text }) => setState({ password: text, error: false }),
    [],
  );
  const toggleSwitch = () =>
    setState({
      switchValue: !state.switchValue,
      error: false
    });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <KeyboardView>
          <WrapperContent>
            <Text
              title={t('screen.registerPassword.subTitle')}
              style={style.subTitle}
            />
            <Text
              title={t('screen.registerPassword.title')}
              style={style.title}
            />
            <Input
              label={t('input.password.label')}
              onChangeText={handlePasswordChange}
              type="password"
            />
            {state.error && (
              <Text title={t('input.password.error')} style={style.error} />
            )}
            <FlexView>
              <Text
                title={t('screen.registerPassword.note')}
                style={style.switchText}
              />
              <View>
                <Switch value={state.switchValue} onChange={toggleSwitch} />
              </View>
            </FlexView>
          </WrapperContent>
          <ProgressFooter
            percent={75}
            handleSubmit={handleSubmit}
            title={t('button.verify')}
          />
        </KeyboardView>
      )}
    </>
  );
};
