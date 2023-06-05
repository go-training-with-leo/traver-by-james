import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { colors } from '@/utils/theme';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
  },
});

interface LayoutContentProps {
  isTransparent?: boolean;
}

export const LayoutContent = ({
  children,
  isTransparent = false,
}: PropsWithChildren<LayoutContentProps>) => {
  return (
    <SafeAreaView
      style={[
        style.container,
        !isTransparent && {
          backgroundColor: colors.background.default,
        },
      ]}>
      <View style={style.children}>{children}</View>
    </SafeAreaView>
  );
};
