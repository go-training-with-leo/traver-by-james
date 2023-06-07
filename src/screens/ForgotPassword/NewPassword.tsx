import {
  Button,
  Footer,
  Input,
  WrapperContent,
  Text,
  KeyboardView,
  useMergeState,
} from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@/utils/theme';
import { passwordValidation } from '@/utils/helpers';

export const NewPassword = () => {
  const { t } = useTranslation('auth');
  const navigation = useNavigation();
  const [state, setState] = useMergeState({
    password: '',
    repeatPassword: '',
    hasErrorPassword: false,
    hasErrorRepeat: false,
  });
  console.log('🚀 ~ file: NewPassword.tsx:21 ~ NewPassword ~ state:', state);

  const handlePasswordChange = (text: string) => {
    setState({ password: text, hasErrorPassword: false });
  };
  const handleRepeatPassChange = (text: string) => {
    setState({ repeatPassword: text, hasErrorRepeat: false });
    1;
  };
  const handleSubmit = () => {
    if (!passwordValidation(state.password)) {
      return setState({ hasErrorPassword: true });
    }
    if (state.password !== state.repeatPassword) {
      return setState({ hasErrorRepeat: true });
    }
    navigation.navigate('Login');
  };
  return (
    <KeyboardView>
      <WrapperContent>
        <Text title={t('screen.newPassword.subTitle')} style={style.subTitle} />
        <Text title={t('screen.newPassword.title')} style={style.title} />
        <Input
          label={t('input.password.label')}
          type="password"
          onChangeText={handlePasswordChange}
        />
        {state.hasErrorPassword && (
          <Text title={t('input.password.error')} style={style.error} />
        )}
        <Input
          label={t('input.password.label')}
          type="password"
          onChangeText={handleRepeatPassChange}
        />
        {state.hasErrorRepeat && (
          <Text title={t('input.repeatPassword.error')} style={style.error} />
        )}
        <Text title={t('screen.newPassword.note')} style={style.description} />
        <Footer>
          <Button title={t('button.save')} onPress={handleSubmit} />
        </Footer>
      </WrapperContent>
    </KeyboardView>
  );
};
