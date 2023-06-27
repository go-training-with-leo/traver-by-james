import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useMergeState } from '../Hooks';
import { Text } from '../Text';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { colors } from '@/utils/theme';
import { useTranslation } from 'react-i18next';
import style from './style';

export const CheckBox = () => {
  const { t } = useTranslation('auth');
  const [state, setState] = useMergeState({ checked: false });

  const toggleCheckbox = () => {
    setState({ checked: !state.checked });
  };
  return (
    <View style={style.container}>
      <BouncyCheckbox
        onPress={toggleCheckbox}
        size={15}
        fillColor={colors.textSecond.light}
        innerIconStyle={style.checkbox}
      />
      <Text
        title={t('checkbox.remember')}
        style={style.description}
      />
    </View>
  );
};


