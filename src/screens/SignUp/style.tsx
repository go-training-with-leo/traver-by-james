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
    width: '100%',
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
  switchText: {
    fontWeight: '400',
    color: colors.textSecond.light,
    fontSize: 14,
    marginBottom: 20,
    flex: 1,
  },
  placeListContent: {
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flex: 1,
    margin: '2%',
  },
  placeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeContainer: {
    flex: 1,
    height: 120,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  placeImg: {
    width: '50%',
    height: '50%',
  },
  tick: { 
    position: 'absolute', 
    right: 10,
    top: 10 
  },
});
