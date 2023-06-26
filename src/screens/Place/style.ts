import { colors } from '@/utils/theme';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  introTitle: {
    fontSize: 32,
    color: colors.white,
    fontWeight: '700',
  },
  favoriteIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: { flex: 1 },
  locationTextContainer: { flex: 8 },
  locationText: {
    color: colors.white,
    textAlignVertical: 'bottom',
    fontWeight: '500',
    fontSize: 14,
  },
  marginLeft: {
    marginLeft: 5,
  },
  reviewContainer: { marginBottom: 20 },
  price: { 
    fontSize: 14, 
    color: colors.white, 
    fontWeight: '700'
   },
  down: { flex: 1, alignItems: 'flex-end' },
  introTitleContainer: { 
    flex: 1, 
    justifyContent: 'center' 
  },
  flex:{
    flex: 1
  }
});

export default style;
