import { colors } from "@/utils/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  groupTitle: { fontSize: 16, fontWeight: '600' },
  rangeSelected: { backgroundColor: 'black' },
  slider: { marginTop: 20, marginHorizontal: 20 },
  price: { color: colors.textSecond.light },
  review: { fontSize: 16, fontWeight: '600' },
  footer: { flex: 1, padding: 10 },
});

export default style;