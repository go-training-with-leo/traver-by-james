import { colors } from "@/utils/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  logo: { marginBottom: '20%' },
  buttonContainer: {
    backgroundColor: colors.background.default,
    alignItems: 'flex-end',
    flex: 1,
  },
  buttonTitle: {
    fontWeight: '300',
    color: colors.textSecond.light,
    fontSize: 14,
  },
  registerButton: {
    borderWidth: 1,
    borderColor: colors.button.border,
    backgroundColor: colors.button.light,
    marginVertical: 20,
  },
  socialContainer: {
    backgroundColor: colors.icon.light,
    padding: 0,
    borderRadius: 40,
    height: 50,
    justifyContent: 'center',
    width: 50,
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
});