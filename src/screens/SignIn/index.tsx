import React, { useCallback, useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import {
  WrapperContent,
  Input,
  Button,
  CheckBox,
  Icons,
  Footer,
} from '@/components';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { saveDoc, signInEmailPassword, signInWithFacebook, signInWithGoogle } from '@/services';
import type { IUser } from '@/utils/interfaces';
import { COLLECTION, SignInMethod } from '@/utils/enums';

export const Login = () => {
  const { t } = useTranslation('auth');
  const navigation = useNavigation();
  const [state, setState] = useState({
    email:'test@gmail.com ',
    password: '123456'
  })

  const createAccount = useCallback(() => {
    navigation.navigate('RegisterName');
  }, [navigation]);

  const saveUser = (user: IUser) => {
    saveDoc({
      collection: COLLECTION.USER,
      data: user,
    });
  };

  const signIn = async (method: SignInMethod) => {
    let credential = null;
    switch (method) {
      case SignInMethod.FB:
        credential = await signInWithFacebook();
        break;
      case SignInMethod.Google:
        credential = await signInWithGoogle();
        break;
      case SignInMethod.Email:
        credential = await signInEmailPassword({
          email: state.email.trim(),
          password: state.password,
        });
        break;
      default:
        break;
    }
    if(credential){
      const user: IUser = {
        displayName: credential?.user?.displayName,
        photoUrl: credential?.user?.photoURL,
        email: credential?.user?.email,
        uid: credential?.user?.uid,
      };
      credential?.additionalUserInfo?.isNewUser && saveUser(user);
      Alert.alert('Login success');
    }
    else Alert.alert('Login Failed')
  };

  return (
    <WrapperContent style={style.content} canBack={false}>
      <View style={{ alignItems: 'center' }}>
        <Icons name="blackLogo" height={40} style={style.logo} />
      </View>
      <Input label={t('input.email.label')} name='email' />
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
      <Button title={t('button.login')} onPress={() => signIn(SignInMethod.Email)} />
      <Footer style={style.footer}>
        <TouchableOpacity style={style.socialContainer}>
          <Icons name="instagram" height={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.socialContainer}
          onPress={()=> signIn(SignInMethod.Google)}>
          <Icons name="google" height={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.socialContainer}
          onPress={() => signIn(SignInMethod.FB)}>
          <Icons name="facebook" height={30} />
        </TouchableOpacity>
      </Footer>
    </WrapperContent>
  );
};
