import {TextStyle, TextProps} from 'react-native';
interface ITextProps extends TextProps {
  title: string;
  color?: TextStyle['color'];
  fontWeight?: TextStyle['fontWeight'];
  fontStyle?: TextStyle['fontStyle'];
  fontSize?: TextStyle['fontSize'];
}

export type {ITextProps};
