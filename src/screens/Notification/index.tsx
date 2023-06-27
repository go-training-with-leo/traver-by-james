import { ScrollView, View } from 'react-native'
import React from 'react'
import { Header, Text, WrapperContent } from '@/components'

export const Notification = () => {
  return (
   <WrapperContent>
        <Header title='Notificartion' />
        <Text title='Today' style={{fontWeight: '700', fontSize: 16}} />
   </WrapperContent>
  )
}

