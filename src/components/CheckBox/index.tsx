import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useMergeState } from '../Hooks';
import { Text } from '../Text';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { colors } from '@/utils/theme';
import { useTranslation } from 'react-i18next';

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

const style = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  checkbox: { borderRadius: 0 },
  description: {
    fontWeight: '300',
    color: colors.textSecond.light,
    fontSize: 14,
  },
});
