import { View, Image } from 'react-native'
import React from 'react'
import { Text } from '../Text'
import style from './style'
import { IAvatarProps } from '@/utils/interfaces'

export const Avatar = ({user}:IAvatarProps) => {
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
