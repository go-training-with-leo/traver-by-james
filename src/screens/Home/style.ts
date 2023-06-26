import { colors } from "@/utils/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  name: { fontWeight: '700',color: colors.white },
  title: { fontWeight: '600', fontSize: 35, marginTop: 20 },
  menu: { fontWeight: '600', marginTop: 10, fontSize: 16, flex: 1 },
  menuButton: { marginTop: 10 },
  menuButtonText: {
    fontWeight: '400',
    textAlign: 'right',
    color: colors.textSecond.light,
  },
  categoryItem: {
    height: 40,
    borderWidth: 0.2,
    justifyContent: 'center',
    borderColor: colors.border,
    borderRadius: 20,
    marginRight: 10,
    marginVertical: 10,
  },
  categoryImg: {
    height: 30,
    width: 30,
    marginHorizontal: 5,
  },
  categoryName: { marginRight: 10, textTransform: 'capitalize' },
  imgBackground:{ borderRadius: 20 },
  favoriteImgBackground: {
    height: 200,
    width: 170,
    marginRight: 10,
    borderRadius: 20,
  },
  favoriteIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
    height: 30,
    width: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  favoriteContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  favoriteName: {
    color: colors.white,
    textAlignVertical: 'bottom',
    fontWeight: '800',
  },
  locationIcon: { flex: 1 },
  locationTextContainer: { flex: 6 },
  locationText: {
    color: colors.white,
    textAlignVertical: 'bottom',
    fontWeight: '800',
    fontSize: 10,
  },
  reviewContainer: { marginBottom: 20 },
});

export default style;