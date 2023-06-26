import { StyleSheet } from "react-native"

const style = StyleSheet.create({
  container:{
    justifyContent: 'center', 
    alignItems: 'center'
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;