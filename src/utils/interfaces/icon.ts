import { ImageStyle, StyleProp, ViewStyle } from "react-native";

export interface IIconsProps {
  name: string;
  height?: number;
  style?: StyleProp<ViewStyle | ImageStyle>;
}
