import React from 'react';
import WhiteLogo from '@/assets/icons/logo_white.svg';
import BlackLogo from '@/assets/icons/logo_black.svg';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';

interface IIconsProps {
  name: string;
  height?: number;
  style?: StyleProp<ViewStyle|ImageStyle>;
}

export const Icons = (props: IIconsProps) => {
  const { name, ...svgProps } = props;

  const icons = {
    whiteLogo: <WhiteLogo {...svgProps} />,
    blackLogo: <BlackLogo {...svgProps} />,
  };

  return icons[name];
};
