import React, { useCallback, useTransition } from 'react';
import {
  WrapperContent,
  Text,
  Icons,
  Image,
  Button,
  Footer,
  useMergeState,
} from '@/components';
import { PLACE } from '@/utils/enums';
import { style } from './style';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { colors } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';

export const FavoritePlace = () => {
  const { t } = useTranslation('auth');
  const [state, setState] = useMergeState({
    selected: [],
  });
  const data = Object.values(PLACE);
  const navigation = useNavigation();

  const checkSelected = (item: string) => {
    return state.selected.includes(item);
  };

  const handleSelected = ({ isSelected, item }) => {
    if (isSelected) {
      setState({
        selected: state.selected.filter(element => element !== item),
      });
    } else setState({ selected: [...state.selected, item] });
  };

  const handlePress = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  const renderItem = ({ item, index }) => {
    const isSelected = checkSelected(item);
    return (
      <TouchableOpacity
        key={item}
        style={style.placeView}
        onPress={() => handleSelected({ isSelected, item })}>
        <View
          style={[
            style.placeContainer,
            {
              borderWidth: isSelected ? 1.5 : 0.5,
              borderColor: isSelected
                ? colors.success
                : colors.textSecond.light,
            },
          ]}>
          <Image name={item} style={style.placeImg} key={index} />
          <Text title={item} />
          {isSelected && (
            <View style={style.tick}>
              <Icons name="tick" />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <WrapperContent>
      <Text title={t('screen.favoritePlace.title')} style={style.title} />

      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={style.placeListContent}
        columnWrapperStyle={style.column}
      />
      <Footer>
        <Button title={t('button.next')} onPress={handlePress} />
      </Footer>
    </WrapperContent>
  );
};
