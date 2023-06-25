import { KeyboardAvoidingView } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { default as defaultStyle } from './style';

export const KeyboardView = ({children}: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView
      style={defaultStyle.keyboardView}
      behavior={'height'}
      keyboardVerticalOffset={0}>
        {children}
      </KeyboardAvoidingView>
  )
}
