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
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    columnGap: 40
  },
});

