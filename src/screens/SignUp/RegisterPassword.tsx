import {
  Input,
  WrapperContent,
  Text,
  KeyboardView,
  useMergeState,
  ProgressFooter,
  Switch,
  FlexView,
} from '@/components';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/utils/types';
import { View } from 'react-native';
import { passwordValidation } from '@/utils/helpers';

type RegisterPasswordProps = NativeStackScreenProps<
  RootStackParamList,
  'RegisterPassword'
>['route'];

export const RegisterPassword = () => {
  const { t } = useTranslation('auth');
  const navigation = useNavigation();
  const route = useRoute<RegisterPasswordProps>();

  const [state, setState] = useMergeState({
    password: '',
    error: false,
    switchValue: false,
  });

  const handleSubmit = () => {
    isPasswordValid ? navigation.navigate('VerifyOTP') : setState({error: true})
  };

  const isPasswordValid = useMemo(() => {
    if (state.switchValue && !passwordValidation(state.password)) {
      return false;
    }
    return true;
  }, [state.password, state.switchValue]);

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
    <KeyboardView>
      <WrapperContent>
        <Text
          title={t('screen.registerPassword.subTitle')}
          style={style.subTitle}
        />
        <Text title={t('screen.registerPassword.title')} style={style.title} />
        <Input
          label={t('input.password.label')}
          onChangeText={handlePasswordChange}
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
  );
};
