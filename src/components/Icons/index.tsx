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
import Home from '@/assets/icons/home.svg';
import HomeFocused from '@/assets/icons/home_focused.svg'
import Send from '@/assets/icons/send.svg'
import SendFocused from '@/assets/icons/send_focused.svg'
import Heart from '@/assets/icons/heart.svg';
import HeartFocused from '@/assets/icons/heart_focused.svg'
import Profile from '@/assets/icons/profile.svg';
import ProfileFocused from '@/assets/icons/profile_focused.svg';
import Calendar from '@/assets/icons/calendar.svg'
import Search from '@/assets/icons/search.svg';
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
    tick: <Tick {...svgProps} />,
    home: <Home {...svgProps} />,
    homeFocused: <HomeFocused {...svgProps} />,
    send: <Send {...svgProps} />,
    sendFocused: <SendFocused {...svgProps} />,
    heart: <Heart {...svgProps} />,
    heartFocused: <HeartFocused {...svgProps} />,
    profile: <Profile {...svgProps} />,
    profileFocused: <ProfileFocused {...svgProps} />,
    calendar: <Calendar {...svgProps} />,
    search: <Search {...svgProps} />,
  };

  return icons[name];
};