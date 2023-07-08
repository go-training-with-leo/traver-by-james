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
  FavoriteCard
} from '@/components';
import { useTranslation } from 'react-i18next';
import style from './style';
import Category from './Category/Category';
import { IDestination, IUser } from '@/utils/interfaces';
import { useNavigation } from '@react-navigation/native';


export const Home = () => {
  const user = useAppSelector(state => state.auth.user);
  const { t } = useTranslation('home');
  const wishlist = useAppSelector(state=> state.user.wishlist)
  const navigation = useNavigation()
  const handlePress = (item: IDestination) => {
    navigation.navigate('Destination', { place: item });
  };
  const destinations: Array<IDestination> = useAppSelector(state=> state.app.destinations)
  return (
    <WrapperContent canBack={false}>
      <ScrollView>
        <FlexView>
          <Avatar user={user} />
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
        {destinations.map((item, index) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Destination destination={item} key={index} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </WrapperContent>
  );
};
