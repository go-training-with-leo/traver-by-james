import { StyleSheet, View} from 'react-native';
import React, { PropsWithChildren } from 'react';

export const Footer = ({ children }: PropsWithChildren) => {
  return (
    <View
      style={style.container}>
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50
  },
});

