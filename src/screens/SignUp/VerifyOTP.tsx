import React from 'react'
import { KeyboardView, WrapperContent, Text, FlexView, Input, useMergeState, ProgressFooter } from '@/components'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { style } from './style'
import { View } from 'react-native'
import type { IInputChangeProps } from '@/utils/interfaces'

export const VerifyOTP = () => {
  const {t} = useTranslation('auth')
  const navigation = useNavigation()
  const [state, setState] = useMergeState({
    firstNumber:  '',
    secondNumber: '',
    thirdNumber: '',
    lastNumber: ''
  })
  console.log(state)
  const handleInputChange = ({name, text}: IInputChangeProps)=>{
    setState({
      [name]: text
    })
  }

  const handleSubmit = () => {
    navigation.navigate("RegisterSuccess")
  }

  return (
    <KeyboardView>
      <WrapperContent>
        <Text title={t('screen.verifyOTP.subTitle')} style={style.subTitle} />
        <Text title={t('screen.verifyOTP.title')} style={style.title} />
        <FlexView>
          <View style={{ flex: 1 }}>
            <Input
              label=""
              textAlign="center"
              name="firstNumber"
              onChangeText={handleInputChange}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Input
              label=""
              textAlign="center"
              name="secondNumber"
              onChangeText={handleInputChange}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Input
              label=""
              textAlign="center"
              name="thirdNumber"
              onChangeText={handleInputChange}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Input
            type='code'
              label=""
              textAlign="center"
              name="lastNumber"
              onChangeText={handleInputChange}
            />
          </View>
        </FlexView>
      </WrapperContent>
        <ProgressFooter percent={100} title={t('button.submit')} handleSubmit={handleSubmit} />
    </KeyboardView>
  );
}