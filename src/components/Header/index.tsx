
import React from 'react';
import { FlexView } from '../Layout';
import { BackButton} from '../Button';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text } from '../Text';
import { IHeaderProps } from '@/utils/interfaces';
import style from './style';

export const Header = ({title, rightIcon}:IHeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <FlexView>
        <View
          style={style.column}>
          <BackButton
            onPress={() => navigation.goBack()}
            style={style.back}
          />
        </View>
        <View
          style={style.column}>
          <Text
            title={title}
            style={style.title}
            numberOfLines={1}
          />
        </View>
        <View
          style={style.last}>
          {rightIcon}
        </View>
      </FlexView>
    </View>
  );
};
