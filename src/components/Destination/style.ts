import { colors } from '@/utils/theme';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    borderColor: colors.border,
    borderWidth: 0.2,
    marginTop: 20,
  },
  imgContainer: {
    flex: 2,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 4,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    paddingTop: 10,
  },
  price: {
    marginTop: 10,
    color: colors.red,
  },
  description: {
    color: colors.textSecond.light,
    fontSize: 12,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  score: { 
    color: colors.black, 
    fontSize: 14,
  },
});

export default style;
