import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useMergeState } from '../Hooks';
import { colors } from '@/utils/theme';
import { Text } from '../Text';
import { Icons } from '../Icons';
import { IInputProps } from '@/utils/interfaces';

export const Input = ({ label, type = 'normal' }: IInputProps) => {
  const [state, setState] = useMergeState({
    value: '',
    showValue: type === 'password' ? false : true,
  });

  const handleChangeText = (value: string) => setState({ value });

  const changeVisibleValue = () =>{
    setState({showValue: !state.showValue})
  }
  return (
    <View style={style.root}>
      <Text title={label} style={style.label} />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          value={state.value}
          onChangeText={handleChangeText}
          style={style.input}
          secureTextEntry={!state.showValue}
        />
        {type === 'password' && (
          <TouchableOpacity style={style.icon} onPress={changeVisibleValue}>
            {state.showValue ? (
              <Icons name="eyeSlash" height={25} />
            ) : (
              <Icons name="eye" height={25} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    marginTop: 30,
  },
  label: {
    fontWeight: '200',
    position: 'absolute',
    left: 20,
    top: -10,
    backgroundColor: colors.background.default,
    zIndex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    fontSize: 16
  },
  input: {
    borderColor: colors.input.default,
    borderWidth: 1,
    borderRadius: 20,
    height: 50,
    width: '100%',
    paddingLeft: 20,
    fontSize: 16
  },
  icon: {
    position: 'absolute',
    right: 15,
  },
});
