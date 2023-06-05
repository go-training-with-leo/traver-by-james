import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}
