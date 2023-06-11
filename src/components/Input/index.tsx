import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useMergeState } from '../Hooks';
import { colors } from '@/utils/theme';
import { Text } from '../Text';
import { Icons } from '../Icons';
import { IInputProps } from '@/utils/interfaces';

export const Input = ({
  label,
  type = 'normal',
  onChangeText,
  textAlign,
  name,
}: IInputProps) => {
  const [state, setState] = useMergeState({
    value: '',
    showValue: type === 'password' ? false : true,
    isFocused: false,
  });

  const handleChangeText = (text: string) => {
    setState({ value: text });
    onChangeText && onChangeText({ name, text });
  };

  const changeVisibleValue = () => {
    setState({ showValue: !state.showValue });
  };

  const handleFocus = () => setState({ isFocused: true });

  const handleBlur = () => setState({ isFocused: false });

  return (
    <View style={styles.root}>
      {label && (
        <Text
          title={label}
          style={[styles.label, state.isFocused && styles.labelFocused]}
        />
      )}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          textAlign={textAlign}
          value={state.value}
          onChangeText={handleChangeText}
          style={[
            styles.input,
            state.isFocused && styles.inputFocused,
            textAlign !== 'center' && { paddingLeft: 20 },
          ]}
          secureTextEntry={!state.showValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          keyboardType="numeric"
          {...(type === 'code' && { maxLength: 1 })}
        />
        {type === 'password' && (
          <TouchableOpacity style={styles.icon} onPress={changeVisibleValue}>
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

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
    width: '100%',
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
