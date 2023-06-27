import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text } from '../Text';
import { IButtonProps } from '@/utils/interfaces';
import { colors } from '@/utils/theme';

export const Button = ({
  title,
  onPress,
  backgroundColor,
  color,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        backgroundColor && {
          backgroundColor,
          borderWidth: 0.2,
          borderColor: colors.border,
        },
      ]}>
      <Text title={title} style={[styles.title, color && { color }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 15,
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
