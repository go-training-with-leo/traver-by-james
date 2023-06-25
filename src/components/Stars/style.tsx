import { colors } from '@/utils/theme';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '700',
    paddingLeft: 5,
  },
});

export default style;
