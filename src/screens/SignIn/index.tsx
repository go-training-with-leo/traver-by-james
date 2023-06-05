import React from 'react';
import { View } from 'react-native';
import { LayoutContent, Text, Input, Button, CheckBox } from '@/components';
import { colors } from '@/utils/theme';
import { useTranslation } from 'react-i18next';

export const Login = () => {
  const { t } = useTranslation('auth');
  return (
    <LayoutContent>
      <Text
        title="Login"
        style={{
          color: colors.textPrimary.dark,
          fontSize: 16,
          fontWeight: '700',
          textAlign: 'center',
        }}
      />
      <Input label={t('input.email')} />
      <Input label={t('input.password')} type="password" />

      <CheckBox />

      <Button
        title={t('button.register')}
        onPress={() => null}
        style={{
          borderWidth: 1,
          borderColor: colors.button.border,
          backgroundColor: colors.button.light,
          marginVertical: 20,
        }}
      />
      <Button
        title={t('button.login')}
        onPress={() => null}
      />
    </LayoutContent>
  );
};
