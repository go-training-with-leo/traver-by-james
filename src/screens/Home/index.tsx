import { View, Image } from 'react-native';
import React from 'react';
import { FlexView, WrapperContent, useAppSelector, Text, Button, useAppDispatch, Icons } from '@/components';
import { logOut, logout } from '@/global/redux';

export const Home = () => {
  // const user = useAppSelector(state => state.auth.user);
  const user = useAppSelector(state=> state.auth.user)
  const dispatch = useAppDispatch()

  return (
    <WrapperContent canBack={false}>
      <FlexView>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            source={{ uri: user?.photoUrl }}
            style={{ height: 20, width: 20, borderRadius: 20, marginRight: 20 }}
          />
          <Text title={`Hi, ${user?.displayName}`} />
        </View>
      </FlexView>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Icons name='home' />
        <Text title='Home' />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          title="Where do you want to go?"
          style={{ fontWeight: '800', fontSize: 16 }}
        />
        <Button title="Sign out" onPress={() => dispatch(logOut())} />
      </View>
    </WrapperContent>
  );
};
