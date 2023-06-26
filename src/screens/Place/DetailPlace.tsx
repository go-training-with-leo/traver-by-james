import { Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Header, HeartButton, Text, WrapperContent } from '@/components';
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
      <ScrollView>
        <Image
          source={{ uri: route.params.place.photoUrl }}
          style={{
            height: 300,
            width: '100%',
            borderRadius: 20,
            marginVertical: 20,
          }}
        />
        <Text
          title="What's included?"
          style={{ fontWeight: '700', fontSize: 16, marginVertical: 20 }}
        />
        <Text
          title="About Trip"
          style={{ fontWeight: '700', fontSize: 16, marginVertical: 20 }}
        />
        <Text
          title={route.params.place.description}
          style={{  fontSize: 14, marginVertical: 10 }}
        />
        <Text
          title="Gallery Photo"
          style={{ fontWeight: '700', fontSize: 16, marginVertical: 20 }}
        />
        <Text
          title="Location"
          style={{ fontWeight: '700', fontSize: 16, marginVertical: 20 }}
        />
        <Text
          title="Review"
          style={{ fontWeight: '700', fontSize: 16, marginVertical: 20 }}
        />
      </ScrollView>
    </WrapperContent>
  );
};
