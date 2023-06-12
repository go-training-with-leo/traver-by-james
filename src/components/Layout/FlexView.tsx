import { View, Text, StyleSheet } from 'react-native'
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    columnGap: 10,
    marginTop: 20,
  },
});
