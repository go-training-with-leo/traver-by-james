import { View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { IFlexViewProps } from '@/utils/interfaces';
import { default as defaultStyle } from './style';

export const FlexView = ({ children, style }: PropsWithChildren<IFlexViewProps>) => {
  return <View style={[defaultStyle.flexView, style]}>{children}</View>;
};
