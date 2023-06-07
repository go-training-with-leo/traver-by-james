import { colors } from '@/utils/theme';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  subTitle: {
    fontWeight: '400',
    color: colors.textSecond.light,
    fontSize: 16,
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontWeight: '600',
    color: colors.textPrimary.dark,
    fontSize: 25,
  },
  error: {
    fontSize: 14,
    color: 'red',
    fontWeight: '300',
    marginTop: 10,
    marginLeft: 10,
    fontStyle: 'italic',
  },
  description: {
    margin: 10,
    fontWeight: '400',
    color: colors.textSecond.light,
  },
});
