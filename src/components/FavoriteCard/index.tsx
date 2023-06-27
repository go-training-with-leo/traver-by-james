import { View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { IPlaceProps } from '@/utils/interfaces';
import { colors } from '@/utils/theme';
import { FlexView, Icons, Stars, Text } from '@/components';
import style from './style';
import { useNavigation } from '@react-navigation/native';

export const FavoriteCard = ({ place }: IPlaceProps) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Destination', { place });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <ImageBackground
        source={{ uri: place.photoUrl }}
        resizeMode="cover"
        imageStyle={style.imgBackground}
        style={style.favoriteImgBackground}>
        <View style={style.favoriteIcon}>
          <Icons name="heart" fill={colors.red} height={15} />
        </View>
        <View style={style.favoriteContent}>
          <Text title={place.name} style={style.favoriteName} />
          <FlexView>
            <View style={style.locationIcon}>
              <Icons name="locationSmall" height={20} />
            </View>
            <View style={style.locationTextContainer}>
              <Text title={place.location} style={style.locationText} />
            </View>
          </FlexView>
          <View style={style.reviewContainer}>
            <Stars value={place.reviewScore} textColor={colors.white} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

