import { SafeAreaView, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { colors } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { WrapperContentProps } from '@/utils/interfaces';
import {default as defaultStyle} from './style'

export const WrapperContent = ({
  children,
  isTransparent = false,
  style,
}: PropsWithChildren<WrapperContentProps>) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[
        defaultStyle.wrapperViewContainer,
        !isTransparent && {
          backgroundColor: colors.background.default,
        },
      ]}>
      {/* {canBack && (
        <BackButton
          onPress={() => navigation.goBack()}
          style={{ width: '90%', marginVertical: 20 }}
        />
      )} */}
      <View style={[defaultStyle.wrapperViewChildren, style]}>{children}</View>
    </SafeAreaView>
  );
};
