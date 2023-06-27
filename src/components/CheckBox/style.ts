import { colors } from "@/utils/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  checkbox: { borderRadius: 0 },
  description: {
    fontWeight: '300',
    color: colors.textSecond.light,
    fontSize: 14,
  },
});

export default style;
