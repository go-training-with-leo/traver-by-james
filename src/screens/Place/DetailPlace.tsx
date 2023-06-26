import { Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Header, HeartButton, WrapperContent } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/utils/types';
import { useRoute } from '@react-navigation/native';

type DetailPlaceProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailDestination'
>['route'];

export const DetailPlace = () => {
  const route = useRoute<DetailPlaceProps>();
  return (
    <WrapperContent>
      <Header
        title={route.params.place.name}
        rightIcon={<HeartButton place={route.params.place} />}
      />
      <Image source={{uri:  route.params.place.photoUrl}} style={{height: 300, width: '100%', borderRadius: 20}}  />
    </WrapperContent>
  );
};
