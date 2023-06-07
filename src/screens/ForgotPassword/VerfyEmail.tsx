import {
  Button,
  Footer,
  Input,
  WrapperContent,
  Text,
  KeyboardView,
  useMergeState,
} from '@/components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { emailValidation } from '@/utils/helpers';

export const VerifyEmail = () => {
  const [state, setState] = useMergeState({
    email: '',
    error: false,
  });
  console.log('🚀 ~ file: VerfyEmail.tsx:20 ~ VerifyEmail ~ state:', state);
  const navigation = useNavigation();
  const { t } = useTranslation('auth');

  const handleInputChange = (text: string) => {
    setState({ email: text, error: false });
  };

  const handleSubmit = () => {
    if (emailValidation(state.email)) {
      return navigation.navigate('NewPassword', { email: state.email });
    }
    setState({ error: true });
  };
  return (
    <KeyboardView>
      <WrapperContent>
        <Text title={t('screen.verifyEmail.subTitle')} style={style.subTitle} />
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
    </KeyboardView>
  );
};
