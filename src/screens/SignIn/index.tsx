import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  WrapperContent,
  Input,
  Button,
  CheckBox,
  Icons,
  Footer,
  KeyboardView,
  Switch,
} from '@/components';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
  const { t } = useTranslation('auth');
  const navigation = useNavigation();

  const createAccount = useCallback(() => {
    navigation.navigate('RegisterName');
  }, [navigation]);

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
        onPress={createAccount}
        buttonStyle={style.registerButton}
      />
      {/* <Switch /> */}
      <Button title={t('button.login')} onPress={() => null} />
      <Footer style={style.footer}>
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
