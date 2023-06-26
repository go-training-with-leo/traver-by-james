import { View, Text } from 'react-native'
import React from 'react'
import { Button, WrapperContent, useAppDispatch } from '@/components'
import { logOut } from '@/global/redux'

export const Profile = () => {
    const dispatch = useAppDispatch()
  return (
    <WrapperContent>
        <View style={{ flex: 1 }}>
          <Button title="Sign out" onPress={() => dispatch(logOut())} />
        </View>
    </WrapperContent>
  )
}

