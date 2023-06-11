import { Image as RNImage } from 'react-native';
import React from 'react';
import type { IImageProps } from '@/utils/interfaces';
import { images } from '@/utils/constants';

export const Image = ({ name, style }: IImageProps) => {
 const imgSource = images[name];
  return (
    <RNImage source={imgSource} style={style} />
  );
};
