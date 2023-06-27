import { colors } from "@/utils/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  title: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 32,
    marginVertical: 30,
  },
  user: {
    marginBottom: 20,
  },
  greeting: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 14,
  },
  location: {
    color: colors.textSecond.light,
    fontSize: 12,
  },
  menu: {
    height: 60,
    width: '100%',
    borderWidth: 0.2,
    borderRadius: 20,
    borderColor: colors.border,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  menuTitle: {
    flex: 1,
  },
  menuIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  notiBadge: {
    height: 5,
    width: 5,
    backgroundColor: 'red',
    borderRadius: 20,
    position: 'absolute',
    right: 5,
  },
  modal: {
    height: '25%',
    backgroundColor: colors.background.default,
    marginTop: 'auto',
    borderRadius: 20,
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
  },
  signOut: {
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20,
    fontSize: 16,
  },
  textContainer: {
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20,
    fontSize: 16,
  },
  message: {
    color: colors.textSecond.light,
  },
  name: {
    fontWeight: '600',
  },
  modalAction: {
    marginTop: 20,
  },
  button: { 
    flex: 1,
    paddingHorizontal: 10 
  },
});

export default style