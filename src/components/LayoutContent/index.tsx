import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  children: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
  },
});

export const LayoutContent = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView
      style={style.container}>
      <View style={style.children}>
        {children}
      </View>
    </SafeAreaView>
  );
};

