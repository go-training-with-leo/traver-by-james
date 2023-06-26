import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { PLACE } from '@/utils/enums';
import { useMergeState, Image, Text, Icons, FlexView } from '@/components';
import style from './style';
import { colors } from '@/utils/theme';

const Category = () => {
    const [state, setState] = useMergeState({
      selected: [],
    });

    const checkSelected = (item: string) => {
      return state.selected.includes(item);
    };
    const data = Object.values(PLACE);

    const handleSelected = ({ isSelected, item }) => {
      if (isSelected) {
        setState({
          selected: state.selected.filter(element => element !== item),
        });
      } else setState({ selected: [...state.selected, item] });
    };

    const renderItem = ({ item, index }) => {
      const isSelected = checkSelected(item);
      
      return (
        <TouchableOpacity
          key={item}
          style={[
            style.categoryItem,
            {
              borderColor: isSelected
                ? colors.success
                : colors.textSecond.light,
            },
          ]}
          onPress={() => handleSelected({ isSelected, item })}>
          <FlexView>
            <Image name={item} style={style.categoryImg} key={index} />
            <Text
              title={item}
              style={style.categoryName}
            />
          </FlexView>
        </TouchableOpacity>
      );
    };
  return (
    <View>
      <FlatList horizontal={true} data={data} renderItem={renderItem} />
    </View>
  );
}

export default Category