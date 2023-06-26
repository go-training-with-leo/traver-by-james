import { View, Image } from 'react-native'
import React from 'react'
import { useAppSelector } from '../Hooks'
import { Text } from '../Text'
import style from './style'

export const Avatar = () => {
  const user = useAppSelector(state=> state.auth.user)
  return (
    <View style={style.container}>
      {user.photoUrl ? (
          <Image
            source={{ uri: user.photoUrl }}
            style={style.img}
          />
      ) : (
       <View style={style.img}>
        <Text title={user.displayName} style={style.name} />
       </View>
      )}
    </View>
  );
}
