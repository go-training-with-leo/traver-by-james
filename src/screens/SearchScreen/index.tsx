import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import {
  Destination,
  FavoriteCard,
  FlexView,
  Header,
  Icons,
  SearchBar,
  Text,
  WrapperContent,
  useAppDispatch,
  useAppSelector,
  useMergeState,
} from '@/components';
import { useTranslation } from 'react-i18next';
import { removeSearch } from '@/global/redux';
import style from './style';
import { useNavigation, useRoute } from '@react-navigation/core';
import { IDestination, ISearchScreenProps } from '@/utils/interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/utils/types';

type TSearchScreenProps = NativeStackScreenProps<RootStackParamList,'SearchScreen'>['route']

export const SearchScreen = () => {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();
  const navigation = useNavigation()
  const recentSearches = useAppSelector(state => state.app.recentSearches);
  const wishlist = useAppSelector(state => state.user.wishlist);
  const destinations:Array<IDestination> = useAppSelector(state => state.app.destinations);
  const [state, setState] = useMergeState({ search: '', result: [], isSearch: false });
  const route = useRoute<TSearchScreenProps>()
  const handlePressRecent = (value: string) => {
    setState({ search: value });
  };

  const handleSearch = (value: string) => {
    setState({
      search: value,
      isSearch: true,
      result: destinations.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      ),
    });
  };

  const removeRecentSearch = (value: string) => {
    dispatch(removeSearch(value));
  };

  const navigateFilter = ()=>{
    navigation.navigate("FilterScreen")
  }

  useEffect(()=>{
    if(route.params?.filter){
      const filterDestination = () => {
        const condition = route.params.filter;
        condition.rating &&
          setState({
            search: '',
            result: 
              destinations
            .filter(item => item.reviewScore >= route.params.filter.rating),
          });
        condition.max &&
          condition.min &&
          setState({
            search: '',
            result: destinations.filter(
              item =>
                item.price >= condition.min && item.price <= condition.max,
            ),
          });
      };
      filterDestination()
    }
  },[route.params?.filter])

  return (
    <WrapperContent>
      <Header
        title={t('search')}
        rightIcon={
          state.isSearch ? (
            <TouchableOpacity onPress={navigateFilter}>
              <Icons name="filter" height={20} width={20} />
            </TouchableOpacity>
          ) : null
        }
      />
      <SearchBar value={state.search} onSearch={handleSearch} />
        {!state.isSearch ? (
          <>
            <Text title={t('lastSearch')} style={style.recentTitle} />
            {recentSearches.slice(0, 3).map((item, index) => (
              <FlexView key={index} style={style.recentItem}>
                <TouchableOpacity
                  style={{ flex: 7 }}
                  onPress={() => handlePressRecent(item)}>
                  <FlexView>
                    <Icons name="recent" height={20} width={20} />
                    <Text title={item} style={style.recentContent} />
                  </FlexView>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.remove}
                  onPress={() => removeRecentSearch(item)}>
                  <Icons name="close" height={20} width={20} />
                </TouchableOpacity>
              </FlexView>
            ))}
            {wishlist.length ? (
              <View style={style.wishlist}>
                <FlexView style={style.wishlistTitleGroup}>
                  <Text title={t('favorite')} style={style.menu} />
                  <TouchableOpacity style={style.menu}>
                    <Text title={t('explore')} style={style.menuButtonText} />
                  </TouchableOpacity>
                </FlexView>
                <View>
                  <FlatList
                    data={wishlist}
                    renderItem={({ item, index }) => (
                      <FavoriteCard place={item} key={index} />
                    )}
                    horizontal={true}
                  />
                </View>
              </View>
            ) : null}
          </>
        ) : (
          <Text
            title={t('result', {
              number: state.result.length,
              name: state.search,
            })}
            style={style.recentTitle}
          />
        )}
        {state.result.length > 0 && (
          <ScrollView>
            {state.result.map((item, index) => (
              <TouchableOpacity onPress={() =>  navigation.navigate('Destination', { place: item })}>
                <Destination destination={item} key={index} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
    </WrapperContent>
  );
};
