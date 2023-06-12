import {
  Button,
  Footer,
  Input,
  WrapperContent,
  Text,
  KeyboardView,
  useMergeState,
  ProgressFooter,
} from '@/components';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/utils/types';
import { emailValidation } from '@/utils/helpers';

type RegisterEmailProps = NativeStackScreenProps<
  RootStackParamList,
  'RegisterEmail'
>['route'];

export const RegisterEmail = () => {
  const { t } = useTranslation('auth');
  const navigation = useNavigation();
  const route = useRoute<RegisterEmailProps>()

  const [state, setState] = useMergeState({
    email: '',
    error: false
  });

  const handleSubmit = () => {
    if(emailValidation(state.email)){
      return navigation.navigate('RegisterPassword', {
        firstName: route.params.firstName,
        lastName: route.params.lastName,
        email: state.email,
      });
    }
    setState({error: true})
  };

  const handleEmailChange = useCallback(
    ({text}) => setState({ email: text, error: false }),
    [],
  );
  return (
    <KeyboardView>
      <WrapperContent>
        <Text
          title={t('screen.registerEmail.subTitle')}
          style={style.subTitle}
        />
        <Text title={t('screen.registerEmail.title')} style={style.title} />
        <Input
          label={t('input.email.label')}
          onChangeText={handleEmailChange}
        />
        {state.error && (
          <Text title={t('input.email.error')} style={style.error} />
        )}
      </WrapperContent>
      <ProgressFooter
        percent={50}
        handleSubmit={handleSubmit}
        title={t('button.createPassword')}
      />
    </KeyboardView>
  );
};
