import { TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../Hooks';
import { IHeartButtonProps } from '@/utils/interfaces';
import { addFavorite, removeFavorite } from '@/global/redux';
import { Icons } from '../Icons';
import { colors } from '@/utils/theme';

export const HeartButton = ({ place }: IHeartButtonProps) => {
  const wishlist = useAppSelector(state => state.user.wishlist);
  const dispatch = useAppDispatch();

  const isFavorited: boolean = useMemo(() => {
    return wishlist.find(item => item.id === place.id) ? true : false;
  }, [wishlist, place]);

  return (
    <TouchableOpacity
      onPress={() =>
        !isFavorited
          ? dispatch(addFavorite(place))
          : dispatch(removeFavorite(place))
      }>
      <Icons
        name="heart"
        {...(isFavorited && { fill: colors.red })}
        stroke={isFavorited ? colors.red : colors.black}
      />
    </TouchableOpacity>
  );
};

