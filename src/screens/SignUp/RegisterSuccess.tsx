
import React from 'react'
import { Icons, WrapperContent, Text, Footer, Button } from '@/components'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { style } from './style'

export const RegisterSuccess = () => {
  const {t} = useTranslation('auth')
  const navigation = useNavigation()

  const handlePress = () =>{
    navigation.navigate('FavoritePlace')
  }
  return (
    <WrapperContent style={{ alignItems: 'center' }}>
      <Icons name="location" height={100} style={{marginBottom: 100}} />
      <Text
        title={t('screen.registerSuccess.title')}
        style={[style.title, {fontSize: 30, width: '100%'}]}
      />
      <Text
        title={t('screen.registerSuccess.subTitle')}
        style={style.subTitle}
      />
      <Footer>
        <Button title={t('button.explore')} onPress={handlePress} />
      </Footer>
    </WrapperContent>
  );
}