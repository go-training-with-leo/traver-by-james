import { ColorValue, StyleProp, ViewStyle } from "react-native";

export interface IIconsProps {
  name: string;
  height?: number;
  width?: number;
  viewBox?: string;
  preserveAspectRatio?: string;
  color?: ColorValue;
  title?: string;
  style?: StyleProp<ViewStyle>;
}
