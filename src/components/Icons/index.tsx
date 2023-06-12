import React from 'react';
import WhiteLogo from '@/assets/icons/logo_white.svg';
import BlackLogo from '@/assets/icons/logo_black.svg';
import EyeSlash from '@/assets/icons/eye_slash.svg';
import Eye from '@/assets/icons/eye.svg'
import Instagram from '@/assets/icons/instagram.svg';
import Facebook from '@/assets/icons/facebook.svg';
import Google from '@/assets/icons/google.svg';
import ArrowBack from '@/assets/icons/arrow_back.svg';
import Location from '@/assets/icons/location.svg';
import Tick from '@/assets/icons/tick.svg';
import { IIconsProps } from '@/utils/interfaces';

export const Icons = (props: IIconsProps) => {
  const { name, ...svgProps } = props;

  const icons = {
    whiteLogo: <WhiteLogo {...svgProps} />,
    blackLogo: <BlackLogo {...svgProps} />,
    eyeSlash: <EyeSlash {...svgProps} />,
    eye: <Eye {...svgProps} />,
    instagram: <Instagram {...svgProps} />,
    facebook: <Facebook {...svgProps} />,
    google: <Google {...svgProps} />,
    arrowBack: <ArrowBack {...svgProps} />,
    location: <Location {...svgProps} />,
    tick: <Tick {...svgProps} />
  };

  return icons[name];
};