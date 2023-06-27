import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
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
import { useNavigation } from '@react-navigation/core';

export const SearchScreen = () => {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();
  const navigation = useNavigation()
  const recentSearches = useAppSelector(state => state.app.recentSearches);
  const wishlist = useAppSelector(state => state.user.wishlist);
  const destinations = useAppSelector(state => state.app.destinations);
  const [state, setState] = useMergeState({ search: '', result: [] });

  const handlePressRecent = (value: string) => {
    setState({ search: value });
  };

  const handleSearch = (value: string) => {
    setState({
      search: value,
      result: destinations.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      ),
    });
  };

  const removeRecentSearch = (value: string) => {
    dispatch(removeSearch(value));
  };

  const handleFilter = ()=>{
    navigation.navigate("FilterScreen")
  }

  return (
    <WrapperContent>
      <Header
        title={t('search')}
        rightIcon={
          state.search ? (
            <TouchableOpacity onPress={handleFilter}>
              <Icons name="filter" height={20} width={20} />
            </TouchableOpacity>
          ) : null
        }
      />
      <SearchBar value={state.search} onSearch={handleSearch} />
        {!state.search ? (
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
              <TouchableOpacity onPress={() => null}>
                <Destination destination={item} key={index} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
    </WrapperContent>
  );
};
