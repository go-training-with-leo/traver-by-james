import type { ISwitchProps } from '@/utils/interfaces';
import React from 'react';
import { View, Switch as RNSwitch, StyleSheet } from 'react-native';

export const Switch = ({value, onChange}:ISwitchProps) => {
  console.log("🚀 ~ file: index.tsx:6 ~ Switch ~ value:", value)
  return (
    <View style={styles.container}>
      <RNSwitch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={value}
        style={{transform:[{scale: .8}]}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

