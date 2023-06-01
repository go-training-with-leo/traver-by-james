import * as React from 'react';
import { ITextProps } from '@/utils/interfaces';
import { Text } from 'react-native';

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
};

const CustomText = ({
  title,
  color = '#192252',
  fontWeight = 'normal',
  fontStyle = 'normal',
  fontSize = 14,
}: ITextProps) => {
  const fontFamily = `Poppins-${PoppinsFont[fontWeight]??''}${
    fontStyle === 'italic' ? 'Italic' : ''
  }`;

  return (
    <Text style={[{ fontFamily, fontWeight, color, fontSize, fontStyle }]}>
      {title}
    </Text>
  );
};

export default CustomText;
