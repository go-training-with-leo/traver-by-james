import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { colors } from '@/utils/theme';
import { BackButton } from '../Button';
import { useNavigation } from '@react-navigation/native';
import { WrapperContentProps } from '@/utils/interfaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  children: {
    flex: 1,
    width: '90%',
    marginTop: 20
  },
});

export const WrapperContent = ({
  children,
  canBack = true,
  isTransparent = false,
  style,
}: PropsWithChildren<WrapperContentProps>) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[
        styles.container,
        !isTransparent && {
          backgroundColor: colors.background.default,
        },
      ]}>
      {/* {canBack && (
        <BackButton
          onPress={() => navigation.goBack()}
          style={{ width: '90%', marginVertical: 20 }}
        />
      )} */}
      <View style={[styles.children, style]}>{children}</View>
    </SafeAreaView>
  );
};
