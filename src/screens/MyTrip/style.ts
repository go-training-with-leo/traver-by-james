import { colors } from '@/utils/theme';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  title: { fontSize: 30, fontWeight: '600' },
  tripContainer: {
    width: '100%',
    height: 150,
    borderWidth: 0.2,
    marginTop: 20,
    padding: 20,
    borderColor: colors.textSecond.light,
    borderRadius: 20,
    justifyContent: 'center',
  },
  tripName: { fontWeight: '700' },
  price: { color: 'red', marginTop: 10 },
  dateContainer: { marginTop: 10 },
  date: { marginLeft: 10, color: colors.textSecond.light },
});

export default style;
