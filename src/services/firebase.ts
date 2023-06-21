import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { authErrors } from '@/utils/constants';
import {
  IAuthResponse,
  ILoginWithEmailProps,
  ISignUpProps,
} from '@/utils/interfaces';

auth().useEmulator('http://localhost:9099');
firestore().useEmulator('localhost', 8080);

export const signUpEmailPassword = async (props: ISignUpProps) => {
  try {
    const response: FirebaseAuthTypes.UserCredential =
      await auth().createUserWithEmailAndPassword(props.email, props.password);
    return {
      credential: {
        ...response,
        email: props.email,
        lastName: props.lastName,
        firstName: props.firstName,
      },
      error: null,
    };
  } catch (error) {
    return {
      credential: null,
      error: error?.code,
    };
  }
};

export const signInWithEmail = async ({
  email,
  password,
}: ILoginWithEmailProps): Promise<IAuthResponse> => {
  try {
    const credential = await auth().signInWithEmailAndPassword(email, password);
    return { credential, error: null };
  } catch (error) {
    return {
      credential: null,
      error: error?.code,
    };
  }
};

export const signInWithFacebook = async (): Promise<IAuthResponse> => {
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      return {
        credential: null,
        error: authErrors.cancel,
      };
    }
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    return {
      credential: await auth().signInWithCredential(facebookCredential),
      error: null,
    };
  } catch (error) {
    return {
      credential: null,
      error: error?.code ?? error,
    };
  }
};

export const signInWithGoogle = async (): Promise<IAuthResponse> => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return {
      credential: await auth().signInWithCredential(googleCredential),
      error: null,
    };
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return {
        credential: null,
        error: authErrors.cancel,
      };
    }
    return {
      credential: null,
      error: error,
    };
  }
};

export const signOut = async () => {
  await auth().signOut();
};

export const updatePassword = (email: string) => {
  return auth().sendPasswordResetEmail(email)
};

export const saveDoc = async ({ collection, data }) => {
  try {
    await firestore().collection(collection).add(data);
  } catch (error) {
    console.log('Error when add new document', error);
  }
};
