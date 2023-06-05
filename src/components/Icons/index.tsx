import React from 'react';
import WhiteLogo from '@/assets/icons/logo_white.svg';
import BlackLogo from '@/assets/icons/logo_black.svg';
import EyeSlash from '@/assets/icons/eye_slash.svg';
import Eye from '@/assets/icons/eye.svg'
import { IIconsProps } from '@/utils/interfaces';

export const Icons = (props: IIconsProps) => {
  const { name, ...svgProps } = props;

  const icons = {
    whiteLogo: <WhiteLogo {...svgProps} />,
    blackLogo: <BlackLogo {...svgProps} />,
    eyeSlash: <EyeSlash {...svgProps} />,
    eye: <Eye {...svgProps} />
  };

  return icons[name];
};
