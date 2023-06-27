import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  FlexView,
  WrapperContent,
  useAppSelector,
  Text,
  SearchBar,
  Avatar,
  Destination,
  useAppDispatch,
  FavoriteCard
} from '@/components';
import { useTranslation } from 'react-i18next';
import style from './style';
import Category from './Category';
import dayjs from 'dayjs';
import { IDestination } from '@/utils/interfaces';
import { useNavigation } from '@react-navigation/native';

const data: Array<IDestination> = [
  {
    id: '1',
    name: 'Kuta Beach',
    price: 1450,
    description: `Picturesque beach offers scenic hiking trails and tourist services including several boutique shops, the popular Ben's Place snack bar and restaurants.`,
    photoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
    gallery: [],
    reviewCount: 5,
    reviewScore: 4.8,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
    location: 'Ho Chi Minh, Viet Nam',
  },
  {
    id: '2',
    name: 'Kuta Resort',
    price: 145,
    description: 'Kuta Beach',
    photoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
    gallery: [],
    reviewCount: 5,
    reviewScore: 5,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
    location: 'Ho Chi Minh, Viet Nam',
  },
  {
    id: '3',
    name: 'Nha Trang',
    price: 1450,
    description: 'Nha trang',
    photoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
    gallery: [],
    reviewCount: 5,
    reviewScore: 2,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
    location: 'Ho Chi Minh, Viet Nam',
  },
  {
    id: '4',
    name: 'Can Gio Resort',
    price: 145,
    description: 'Kuta Beach',
    photoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
    gallery: [],
    reviewCount: 5,
    reviewScore: 4.4,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
    location: 'Ho Chi Minh, Viet Nam',
  },
  {
    id: '5',
    name: 'Vung Tau',
    price: 1450,
    description: 'Vung Tau',
    photoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
    gallery: [],
    reviewCount: 5,
    reviewScore: 0,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
    location: 'Ho Chi Minh, Viet Nam',
  },
  {
    id: '6',
    name: 'Kien Giang',
    price: 145,
    description: 'Kien Giang',
    photoUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ca/db/5b/matira-beach.jpg?w=1400&h=-1&s=1',
    gallery: [],
    reviewCount: 5,
    reviewScore: 1,
    startDate: dayjs('2021-06-13').toDate(),
    endDate: dayjs('2021-06-15').toDate(),
    location: 'Ho Chi Minh, Viet Nam',
  },
];

export const Home = () => {
  const user = useAppSelector(state => state.auth.user);
  const { t } = useTranslation('home');
  const wishlist = useAppSelector(state=> state.user.wishlist)
  const navigation = useNavigation()
  const handlePress = (item: IDestination) => {
    navigation.navigate('Destination', { place: item });
  };

  return (
    <WrapperContent canBack={false}>
      <ScrollView>
        <FlexView>
          <Avatar />
          <Text
            title={t('welcome', { name: user.displayName })}
            style={style.name}
          />
        </FlexView>
        <Text title={t('title')} style={style.title} />
        <SearchBar onSearch={() => navigation.navigate('SearchScreen')} />
        <FlexView>
          <Text title={t('category')} style={style.menu} />
          <TouchableOpacity style={style.menuButton}>
            <Text title={t('all')} style={style.menuButtonText} />
          </TouchableOpacity>
        </FlexView>
        <Category />
        {wishlist.length ? (
          <>
            <FlexView>
              <Text title={t('favorite')} style={style.menu} />
              <TouchableOpacity style={style.menu}>
                <Text title={t('explore')} style={style.menuButtonText} />
              </TouchableOpacity>
            </FlexView>
            <View style={style.list}>
              <FlatList
                data={wishlist}
                renderItem={({ item, index }) => (
                  <FavoriteCard place={item} key={index} />
                )}
                horizontal={true}
              />
            </View>
          </>
        ) : null}
        <FlexView>
          <Text title={t('popular')} style={style.menu} />
          <TouchableOpacity style={style.menu}>
            <Text title={t('all')} style={style.menuButtonText} />
          </TouchableOpacity>
        </FlexView>
        {data.map((item, index) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Destination destination={item} key={index} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </WrapperContent>
  );
};
