import { View, Text, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { colors } from '@/utils/theme';

export const KeyboardView = ({children}: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView
      style={style.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}>
        {children}
      </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
});
