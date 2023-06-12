import { StyleProp, TextStyle } from 'react-native';

export interface IInputChangeProps {
  name?: string;
  text: string;
}
export interface IInputProps {
  label: string;
  name?: string;
  type?: 'password' | 'normal' | 'code';
  onChangeText?: (props: IInputChangeProps) => void;
  textAlign?: 'center' | 'left' | 'right';
}
