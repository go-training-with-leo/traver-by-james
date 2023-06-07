import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  WrapperContent,
  Input,
  Button,
  CheckBox,
  Icons,
  Footer,
  KeyboardView,
} from '@/components';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
  const { t } = useTranslation('auth');
  const navigation = useNavigation();
  return (
    <WrapperContent style={style.content} canBack={false}>
      <View style={{ alignItems: 'center' }}>
        <Icons name="blackLogo" height={40} style={style.logo} />
      </View>
      <Input label={t('input.email.label')} />
      <Input label={t('input.password.label')} type="password" />
      <View style={style.option}>
        <CheckBox />
        <Button
          title={t('button.forgotPassword')}
          onPress={() => navigation.navigate('VerifyEmail')}
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
    </WrapperContent>
  );
};
