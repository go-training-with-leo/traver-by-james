import { ImageBackground, TouchableOpacity, View } from 'react-native';
import React, { useCallback } from 'react';
import {
  Button,
  FlexView,
  Footer,
  Header,
  HeartButton,
  Icons,
  Text,
  WrapperContent,
  useAppDispatch,
  useAppSelector,
} from '@/components';
import style from './style';
import { RootStackParamList } from '@/utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { renderPrice } from '@/utils/helpers';
import { addFavorite, bookTrip, removeFavorite } from '@/global/redux';
import { colors } from '@/utils/theme';

type DestinationProps = NativeStackScreenProps<
  RootStackParamList,
  'Destination'
>['route'];

export const Place = () => {
  const route = useRoute<DestinationProps>();
  const navigation = useNavigation()
  const wishlist = useAppSelector(state => state.user.wishlist);
  const isFavorite = wishlist.find(item => item.id === route.params.place.id)
    ? true
    : false;
  const dispatch = useAppDispatch();

  const navigateDetail = useCallback(() =>{
    navigation.navigate("DetailDestination", {place: route.params.place})
  },[navigation])
  return (
    <ImageBackground
      source={{ uri: route.params.place.photoUrl }}
      resizeMode="cover"
      style={{
        flex: 1,
      }}>
      <WrapperContent isTransparent={true}>
        <Header
          rightIcon={
            <HeartButton place={route.params.place} />
          }
        />
        <View style={style.introTitleContainer}>
          <Text title={route.params.place.name} style={style.introTitle} />
          <FlexView>
            <Icons name="locationSmall" height={10} />
            <Text
              title={route.params.place.location}
              style={[style.locationText, style.marginLeft]}
            />
          </FlexView>
          <Text
            title={route.params.place.description}
            style={{ color: 'white' }}
          />
          <FlexView>
            <View>
              <FlexView>
                <Icons name="starActive" height={20} fill={colors.yellow} />
                <Text
                  title={route.params.place.reviewScore.toString()}
                  style={style.locationText}
                />
              </FlexView>
            </View>
            <View style={style.down}>
              <TouchableOpacity onPress={navigateDetail}>
                <Icons
                  name="arrowDown"
                  height={20}
                  width={20}
                  fill={colors.white}
                />
              </TouchableOpacity>
            </View>
          </FlexView>
        </View>
        <Footer>
          <FlexView>
            <View style={{ flex: 1 }}>
              <Text
                title={`${renderPrice(route.params.place.price)} /Person`}
                style={style.price}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title={'Booking'}
                onPress={() => dispatch(bookTrip(route.params.place))}
              />
            </View>
          </FlexView>
        </Footer>
      </WrapperContent>
    </ImageBackground>
  );
};
