import { colors } from "@/utils/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  flexView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  keyboardView: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  wrapperViewContainer: {
    flex: 1,
    alignItems: 'center',
  },
  wrapperViewChildren: {
    flex: 1,
    width: '90%',
    marginTop: 20,
  },
});

export default style;