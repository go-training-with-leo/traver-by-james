import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text } from '../Text';
import { IButtonProps } from '@/utils/interfaces';
import { colors } from '@/utils/theme';

export const Button = ({ title, onPress }: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style.container}>
      <Text
        title={title}
        style={style.title}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button.default,
  },
  title: {
    color: colors.textPrimary.dark,
    fontWeight: '600',
    fontSize: 16,
  },
});
