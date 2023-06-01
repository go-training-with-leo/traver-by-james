import * as React from 'react';

import {
  Text as RNText,
  StyleSheet,
  TextProps,
} from 'react-native';

const PoppinsFont = {
  '100': 'Thin',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
  normal: 'Regular',
  bold: 'Bold',
};

interface ITextProps extends TextProps {
  title: string;
}

const Text = (props: ITextProps) => {
  const { fontWeight = '300', fontStyle } = StyleSheet.flatten(
    props.style || {},
  );
  const fontFamily = `Poppins-${PoppinsFont[fontWeight]}${
    fontStyle === 'italic' ? 'Italic' : ''
  }`;

  return (
    <RNText {...props} style={[props.style,{ fontFamily }]}>
      {props.title}
    </RNText>
  );
};

export default Text;
