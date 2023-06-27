import { View, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch, useMergeState } from '../Hooks';
import { Icons } from '../Icons';
import style from './style';
import { ISearchBarProps } from '@/utils/interfaces';
import { useTranslation } from 'react-i18next';
import { addSearch } from '@/global/redux';

export const SearchBar = ({ value, onSearch }: ISearchBarProps) => {
  const { t } = useTranslation('translation');
  const [state, setState] = useMergeState({ search: '' });
  const dispatch = useAppDispatch()

  const handleChange = (text: string) => {
    setState({ search: text.trim() });
  };

  const handleSearch = () => {
    state.search && dispatch(addSearch(state.search));
    onSearch(state.search);
  };

  useEffect(() => {
    if (value) {
      handleChange(value);
      onSearch(value);
    }
  }, [value]);

  return (
    <View style={style.container}>
      <TextInput
        autoCapitalize="none"
        style={style.input}
        value={state.search}
        onChangeText={handleChange}
        placeholder={t('searchPlaceholder')}
      />
      <TouchableOpacity style={style.icon} onPress={handleSearch}>
        <Icons name="search" />
      </TouchableOpacity>
    </View>
  );
};
