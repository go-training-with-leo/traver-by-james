import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { authErrors } from '@/utils/constants';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

interface IAuthViaEmailProps {
  email: string;
  password: string;
}

interface ISaveDocProps<T>{
  collection: string;
  data: T
}
export const signUpEmailPassword = async ({
  email,
  password,
}: IAuthViaEmailProps): Promise<FirebaseAuthTypes.User | null> => {
  try {
    const response: FirebaseAuthTypes.UserCredential =
      await auth().createUserWithEmailAndPassword(email, password);
    return response.user;
  } catch (error) {
    if (error?.code === authErrors.existedEmail) {
      Alert.alert('That email address is already in use!');
    }
    if (error?.code === authErrors.invalidEmail) {
      Alert.alert('That email address is invalid!');
    }
    if (error?.code === authErrors.weekPassword) {
      Alert.alert('That password is too weak');
    }
    return null;
  }
};

export const signInEmailPassword= async({email, password}: IAuthViaEmailProps)=>{
  try{
    const response = await auth().signInWithEmailAndPassword(email, password)
    console.log("🚀 ~ file: firebase.ts:43 ~ signInEmailPassword ~ response:", response)
    return response.user;
  }
  catch(error){
    console.log("🚀 ~ file: firebase.ts:47 ~ signInEmailPassword ~ error:", error)
    if(error?.code=== authErrors.userNotFound){
      Alert.alert("User not found.")
    }
    if(error?.code===authErrors.wrongPassword){
      Alert.alert("That password is not correct.")
    }
    return null;
  }
}

export const signInWithFacebook =async() =>{
   try{
    const result = await LoginManager.logInWithPermissions([
     'public_profile',
     'email',
   ]);

   if (result.isCancelled) {
     throw 'User cancelled the login process';
   }
   const data = await AccessToken.getCurrentAccessToken();

   if (!data) {
     throw 'Something went wrong obtaining access token';
   }
   const facebookCredential = auth.FacebookAuthProvider.credential(
     data.accessToken,
   );
   return auth().signInWithCredential(facebookCredential);
   }
   catch(error){
    console.log('error', error)
   }
}

export const signInWithGoogle = async() => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const { idToken } = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}

export const signOut = async() =>{
  await auth().signOut()
}


export const saveDoc = async ({ collection, data }) => {
  try {
    await firestore().collection(collection).add(data) 
  } catch (error) {
    console.log('Error when add new document', error)
  }
};

