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
import Stars from '../Stars';

export const Destination = ({ destination }: IDestinationProps) => {
  const wishlist = useAppSelector(state => state.user.wishlist);
  const dispatch = useAppDispatch();

  const isFavorited: boolean = useMemo(() => {
    return wishlist.find(item => item.id === destination.id) ? true : false;
  }, [wishlist, destination]);

  const handlePress = () => {
    isFavorited
      ? dispatch(removeFavorite(destination))
      : dispatch(addFavorite(destination));
  };
  return (
    <View style={style.container}>
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
      <TouchableOpacity style={style.icon} onPress={handlePress}>
        <Icons name="heart" fill={isFavorited ? colors.red : colors.white} />
      </TouchableOpacity>
    </View>
  );
};
