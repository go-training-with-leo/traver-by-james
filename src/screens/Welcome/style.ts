import { colors } from '@/utils/theme';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: colors.textPrimary.light,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 16,
    color: colors.textPrimary.light,
    fontWeight: '300',
    marginTop: 20,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 10,
    marginTop: 30,
  },
  icon: {
    marginBottom: 20
  },
});

export default style;
