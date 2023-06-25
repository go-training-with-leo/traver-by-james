import { View, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'

export const FlexView = ({children}: PropsWithChildren) => {
  return (
    <View style={style.root}>
      {children}
    </View>
  )
}

const style = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
