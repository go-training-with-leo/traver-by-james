import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';

interface IFooterProps {
  style?: StyleProp<ViewStyle>;
}

export const Footer = ({
  children,
  style,
}: PropsWithChildren<IFooterProps>) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});
