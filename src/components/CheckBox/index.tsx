import React from 'react';
import { View } from 'react-native';
import { useMergeState } from '../Hooks';
import { default as RNCheckBox } from '@react-native-community/checkbox';
import { Text } from '../Text';

export const CheckBox = () => {
  const [state, setState] = useMergeState({ checked: false });

  const toggleCheckbox = () => {
    setState({ checked: !state.checked });
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <RNCheckBox value={state.checked} onValueChange={toggleCheckbox} />
      <Text title="hello" style={{ fontWeight: '200' }} />
    </View>
  );
};
