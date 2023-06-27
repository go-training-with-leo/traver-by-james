import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: 'rgba(243, 243, 243, 1)',
    justifyContent: 'center',
  },
  input: { flex: 1, paddingHorizontal: 20 },
  icon: { position: 'absolute', right: 10 },
});

export default style;