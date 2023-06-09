import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 40,
  },
  column: {
    flex: 1,
    justifyContent: 'center'
  },
  back: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 16
  },
  last: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  
});

export default style;
