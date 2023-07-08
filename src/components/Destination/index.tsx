import { View, Image, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import { FlexView } from '../Layout';
import { Text } from '../Text';
import { Icons } from '../Icons';
import { IDestinationProps } from '@/utils/interfaces';
import { renderPrice } from '@/utils/helpers';
import style from './style';
import { colors } from '@/utils/theme';
import { useAppDispatch, useAppSelector } from '../Hooks';
import { addFavorite, removeFavorite } from '@/global/redux';
import { Stars } from '../Stars';
import { useNavigation } from '@react-navigation/core';

export const Destination = ({ destination }: IDestinationProps) => {
  const wishlist = useAppSelector(state => state.user.wishlist);
  const dispatch = useAppDispatch();
  const navigation = useNavigation()

  const isFavorited: boolean = useMemo(() => {
    return wishlist.find(item => item.id === destination.id) ? true : false;
  }, [wishlist, destination]);

  const handlePress = () => {
    isFavorited
      ? dispatch(removeFavorite(destination))
      : dispatch(addFavorite(destination));
  };

  const navigateDestination = () =>{
    navigation.navigate("Destination",{place:destination})
  }
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={navigateDestination}>
        <FlexView>
          <View style={style.imgContainer}>
            <Image source={{ uri: destination.photoUrl }} style={style.img} />
          </View>
          <View style={style.contentContainer}>
            <Text title={destination.name} style={style.title} />
            <Text title={renderPrice(destination.price)} style={style.price} />
            <Stars value={destination.reviewScore} />
            <Text
              title={destination.description}
              numberOfLines={2}
              style={style.description}
            />
          </View>
        </FlexView>
      </TouchableOpacity>
      <TouchableOpacity style={style.icon} onPress={handlePress}>
        <Icons
          name={isFavorited ? 'heart' : 'heartFocused'}
          {...(isFavorited && { fill: colors.red })}
          stroke={isFavorited ? colors.red : colors.black}
        />
      </TouchableOpacity>
    </View>
  );
};
