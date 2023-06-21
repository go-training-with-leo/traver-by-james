import { StyleProp, TextStyle } from 'react-native';

export interface IInputChangeProps {
  name?: string;
  text: string;
}
export interface IInputProps {
  label: string;
  name?: 'email' | 'password' | 'repeat';
  type?: 'password' | 'normal' | 'code' | 'email';
  onChangeText?: (props: IInputChangeProps) => void;
  textAlign?: 'center' | 'left' | 'right';
}
