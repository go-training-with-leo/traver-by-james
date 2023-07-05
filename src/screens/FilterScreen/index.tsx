import React from 'react';
import {
  WrapperContent,
  Header,
  Text,
  useMergeState,
  Footer,
  Button,
  FlexView,
} from '@/components';
import { useTranslation } from 'react-i18next';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Review from './Review';
import { colors } from '@/utils/theme';
import style from './style';
import { renderPrice } from '@/utils/helpers';
import { useNavigation } from '@react-navigation/core';

export const FilterScreen = () => {
  const { t } = useTranslation('translation');
  const navigation = useNavigation()
  const [state, setState] = useMergeState({
    minSelected: 0,
    maxSelected: 2000,
    rating: 5,
    min: 0,
    max: 2000,
  });

  const applyFilter=() =>{
    navigation.navigate("SearchScreen",{filter:{
      max: state.maxSelected,
      min: state.minSelected,
      rating: state.rating
    }})
  }
  return (
    <>
      <WrapperContent>
        <Header title={t('filter')} />
        <ScrollView style={{ flex: 1 }}>
          <Text title={t('rangePrice')} style={style.groupTitle} />
          <View style={style.slider}>
            <MultiSlider
              values={[state.min, state.max]}
              min={state.min}
              max={state.max}
              enableLabel
              selectedStyle={style.rangeSelected}
              onValuesChange={values =>
                setState({ minSelected: values[0], maxSelected: values[1] })
              }
            />
          </View>
          <FlexView style={{marginBottom: 20}}>
            <View style={{ flex: 1 }}>
              <Text
                title={renderPrice(state.min)}
                style={style.price}
              />
            </View>
              <Text
                title={renderPrice(state.max)}
                style={style.price}
              />
          </FlexView>
          <Text
            title={t('review')}
            style={style.review}
          />
          {Array(5)
            .fill(1)
            .map((_item, index) => (
              <TouchableOpacity
                style={{ marginVertical: 15 }}
                onPress={() => setState({ rating: Math.abs(index - 5) })}>
                <Review
                  value={Math.abs(index - 5)}
                  selected={Math.abs(index - 5) === state.rating}
                />
              </TouchableOpacity>
            ))}
          {/* <Text
            title={t('include')}
            style={{ fontSize: 16, fontWeight: '600' }}
          /> */}
        </ScrollView>
      </WrapperContent>
      <Footer>
        <FlexView>
          <View style={style.footer}>
            <Button
              backgroundColor={colors.white}
              title={t('clear')}
              onPress={() => null}
            />
          </View>
          <View style={style.footer}>
            <Button title={t('apply')} onPress={applyFilter} />
          </View>
        </FlexView>
      </Footer>
    </>
  );
};
