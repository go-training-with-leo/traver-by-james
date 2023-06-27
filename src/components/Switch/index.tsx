import type { ISwitchProps } from '@/utils/interfaces';
import { colors } from '@/utils/theme';
import React from 'react';
import { View, Switch as RNSwitch, StyleSheet } from 'react-native';

export const Switch = ({value, onChange, style}:ISwitchProps) => {
  return (
    <View style={styles.container}>
      <RNSwitch
        trackColor={{
          false: 'rgba(243, 243, 243, 1)',
          true: 'rgba(243, 243, 243, 1)',
        }}
        thumbColor={value ? colors.black : colors.white}
        ios_backgroundColor={colors.white}
        onValueChange={onChange}
        value={value}
        style={[{ transform: [{ scale: 0.8 }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

