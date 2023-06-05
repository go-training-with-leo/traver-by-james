import { StyleProp, ViewStyle } from "react-native";

export interface IButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>
}
