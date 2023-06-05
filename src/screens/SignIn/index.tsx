import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  LayoutContent,
  Input,
  Button,
  CheckBox,
  Icons,
  Footer,
} from '@/components';
import { useTranslation } from 'react-i18next';
import { style } from './style';

export const Login = () => {
  const { t } = useTranslation('auth');
  return (
    <LayoutContent>
      <View style={{ alignItems: 'center' }}>
        <Icons name="blackLogo" height={40} style={style.logo} />
      </View>
      <Input label={t('input.email')} />
      <Input label={t('input.password')} type="password" />
      <View style={style.option}>
        <CheckBox />
        <Button
          title={t('button.forgotPassword')}
          onPress={() => null}
          buttonStyle={style.buttonContainer}
          titleStyle={style.buttonTitle}
        />
      </View>
      <Button
        title={t('button.register')}
        onPress={() => null}
        buttonStyle={style.registerButton}
      />
      <Button title={t('button.login')} onPress={() => null} />
      <Footer>
        <TouchableOpacity style={style.socialContainer}>
          <Icons name="instagram" height={30} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialContainer}>
          <Icons name="google" height={30} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialContainer}>
          <Icons name="facebook" height={30} />
        </TouchableOpacity>
      </Footer>
    </LayoutContent>
  );
};
