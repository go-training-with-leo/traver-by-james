import React, { useCallback } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import {
  WrapperContent,
  Input,
  Button,
  CheckBox,
  Icons,
  Footer,
  useAppDispatch,
  useAppSelector,
  useMergeState,
  Loading,
  FlexView,
  Text
} from '@/components';
import { useTranslation } from 'react-i18next';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { SignInMethod } from '@/utils/enums';
import {
  loginWithEmail,
  loginWithFacebook,
  loginWithGoogle,
} from '@/global/redux/auth';
import type {} from 'redux-thunk/extend-redux';
import { emailValidation, handleAuthException, passwordValidation } from '@/utils/helpers';
import { loadingSelector } from '@/global/redux';
import { colors } from '@/utils/theme';

export const Login = () => {
  const { t } = useTranslation('auth');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [state, setState] = useMergeState({
    email: '',
    password: '',
    // canLogin: false,
    errorEmail: false,
  });

  const auth = useAppSelector(state => state.auth);
  const loading = loadingSelector();


  const createAccount = useCallback(() => {
    navigation.navigate('RegisterName');
  }, [navigation]);

  const navigateHome = useCallback(()=>{
    navigation.navigate("Main");
  },[navigation])

  const signIn = 
    async (method: SignInMethod) => {
      
        switch (method) {
          case SignInMethod.FB:
            dispatch(
              loginWithFacebook({
                onSuccess: navigateHome,
                onFailure: () =>
                  auth.error && handleAuthException(auth.error, t),
              }),
            );
            break;
          case SignInMethod.Google:
            dispatch(
              loginWithGoogle({
                onSuccess: () => Alert.alert('Success'),
                onFailure: () =>
                  auth.error && handleAuthException(auth.error, t),
              }),
            );
            break;
          case SignInMethod.Email:
            if(emailValidation(state.email)){
              dispatch(
                loginWithEmail({
                  email: state.email.trim(),
                  password: state.password,
                  onSuccess: () => Alert.alert('Success'),
                  onFailure: () =>
                    auth.error && handleAuthException(auth.error, t),
                }),
              );
            }
            else{
              setState({errorEmail: true})
            }
            break;
          default:
            break;
        
      }
    }

  const handleChangeInput = ({ name, text }) => {
    setState({ [name]: text, [`error${name.charAt(0).toUpperCase()+name.slice(1)}`]: false });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <WrapperContent style={style.content} canBack={false}>
          <View style={{ alignItems: 'center' }}>
            <Icons name="blackLogo" height={40} style={style.logo} />
          </View>
          <Input
            label={t('input.email.label')}
            name="email"
            onChangeText={handleChangeInput}
          />
          {state.errorEmail && (
            <Text title={t('input.email.error')} style={style.error} />
          )}
          <Input
            label={t('input.password.label')}
            type="password"
            onChangeText={handleChangeInput}
            name="password"
          />
          <View style={style.option}>
            <FlexView>
              <CheckBox />
              <TouchableOpacity
                onPress={() => navigation.navigate('VerifyEmail')}>
                <Text
                  title={t('button.forgotPassword')}
                  style={{ color: colors.textSecond.light, fontSize: 14 }}
                />
              </TouchableOpacity>
            </FlexView>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Button
              title={t('button.register')}
              onPress={createAccount}
              backgroundColor={colors.white}
            />
          </View>
          <Button
            title={t('button.login')}
            onPress={() => signIn(SignInMethod.Email)}
          />
          <Footer style={style.footer}>
            <TouchableOpacity style={style.socialContainer}>
              <Icons name="instagram" height={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.socialContainer}
              onPress={() => signIn(SignInMethod.Google)}>
              <Icons name="google" height={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.socialContainer}
              onPress={() => signIn(SignInMethod.FB)}>
              <Icons name="facebook" height={30} />
            </TouchableOpacity>
          </Footer>
        </WrapperContent>
      )}
    </>
  );
};
