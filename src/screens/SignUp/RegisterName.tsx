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
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '@/components/ProgressBar';
import { View } from 'react-native';

export const RegisterName = () => {
  const { t } = useTranslation('auth');
  const navigation = useNavigation();
  const [state, setState] = useMergeState({
    firstName: '',
    lastName: '',
  });

  const handleSubmit = useCallback(() => {
    navigation.navigate('RegisterEmail', { ...state });
  }, [navigation]);

  const handleFirstNameChange = useCallback(
    ({text}) => setState({ firstName: text }),
    [],
  );
  const handleLastNameChange = useCallback(
    ({text}) => setState({ lastName: text }),
    [],
  );
  return (
    <KeyboardView>
      <WrapperContent>
        <Text
          title={t('screen.registerName.subTitle')}
          style={style.subTitle}
        />
        <Text title={t('screen.registerName.title')} style={style.title} />
        <Input
          label={t('input.firstName')}
          onChangeText={handleFirstNameChange}
        />
        <Input
          label={t('input.lastName')}
          onChangeText={handleLastNameChange}
        />
      </WrapperContent>
      <ProgressFooter percent={25} handleSubmit={handleSubmit} title={t('button.inputEmail')} />
    </KeyboardView>
  );
};
