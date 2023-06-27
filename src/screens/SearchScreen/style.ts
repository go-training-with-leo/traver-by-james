import { StyleSheet } from 'react-native';
import { colors } from '@/utils/theme';

const style = StyleSheet.create({
  menu: { fontWeight: '600', marginTop: 10, fontSize: 16, flex: 1 },
  menuButton: { marginTop: 10 },
  menuButtonText: {
    fontWeight: '400',
    textAlign: 'right',
    color: colors.textSecond.light,
  },
  recentTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 20,
  },
  recentItem: {
    marginVertical: 10,
  },
  recentContent: {
    marginLeft: 20,
    fontSize: 14,
  },
  remove: {
    alignItems: 'flex-end',
  },
  wishlist: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  wishlistTitleGroup: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default style;
