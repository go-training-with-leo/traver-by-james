import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import {
  KeyboardView,
  WrapperContent,
  useAppSelector,
  useMergeState,
  Text,
  SearchBar,
  Destination,
} from '@/components';
import style from './styles';

export const Wishlist = () => {
  const { t } = useTranslation('translation');
  const wishlist = useAppSelector(state => state.user.wishlist);
  const [state, setState] = useMergeState({
    searchingWishlist: wishlist,
    search: '',
  });

  const handleSearch = (value: string) => {
    setState({
      searchingWishlist: wishlist.filter(item => item.name.toLowerCase().includes(value.toLowerCase())),
      search: value,
    });
  };

  useEffect(() => {
    handleSearch(state.search);
  }, [wishlist]);

  return (
    <KeyboardView>
      <WrapperContent>
        <Text title={t('wishlist')} style={style.title} />
        <SearchBar onSearch={handleSearch} />
        <ScrollView>
          {state.searchingWishlist.map((item, index) => (
            <Destination destination={item} key={index} />
          ))}
        </ScrollView>
      </WrapperContent>
    </KeyboardView>
  );
};

