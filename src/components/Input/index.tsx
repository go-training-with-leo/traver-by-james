import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useMergeState } from '../Hooks';
import { colors } from '@/utils/theme';
import { Text } from '../Text';
import { Icons } from '../Icons';
import { IInputProps } from '@/utils/interfaces';

export const Input = ({ label, type = 'normal', onChangeText }: IInputProps) => {
  const [state, setState] = useMergeState({
    value: '',
    showValue: type === 'password' ? false : true,
    isFocused: false,
  });
  console.log(state);
  const handleChangeText = (text: string) => {
    setState({ value: text });
    onChangeText(text)
  };

  const changeVisibleValue = () => {
    setState({ showValue: !state.showValue });
  };

  const handleFocus=() => setState({isFocused: true})

  const handleBlur = () => setState({isFocused: false})

  return (
    <View style={style.root}>
      <Text
        title={label}
        style={[style.label, state.isFocused && style.labelFocused]}
      />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          value={state.value}
          onChangeText={handleChangeText}
          style={[style.input, state.isFocused && style.inputFocused]}
          secureTextEntry={!state.showValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
  },
  labelFocused: {
    color: colors.input.focused,
  },
  input: {
    borderColor: colors.input.default,
    borderWidth: 1,
    borderRadius: 20,
    height: 50,
    width: '100%',
    paddingLeft: 20,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: colors.input.focused,
  },
  icon: {
    position: 'absolute',
    right: 15,
  },
});
