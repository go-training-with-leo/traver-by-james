import { View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useMergeState } from '../Hooks';
import { Icons } from '../Icons';
import style from './style';
import { ISearchBarProps } from '@/utils/interfaces';
import { useTranslation } from 'react-i18next';

export const SearchBar = ({ onSearch }: ISearchBarProps) => {
  const { t } = useTranslation('translation');
  const [state, setState] = useMergeState({ search: '' });

  const handleChange = (text: string) => {
    setState({ search: text.trim() });
  };

  const handleSearch = () => {
    onSearch(state.search);
  };

  return (
    <View style={style.container}>
      <TextInput
        autoCapitalize="none"
        style={style.input}
        value={state.search}
        onChangeText={handleChange}
        placeholder={t('search')}
      />
      <TouchableOpacity style={style.icon} onPress={handleSearch}>
        <Icons name="search" />
      </TouchableOpacity>
    </View>
  );
};
