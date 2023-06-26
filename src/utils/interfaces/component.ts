import { FavoritePlace } from './../../screens/SignUp/FavoritePlace';
import { ColorValue, ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native/types";
import { PLACE } from "../enums";
import { IDestination } from "./action";

export interface ISearchBarProps {
  onSearch: (value: string) => void;
}
export interface ISwitchProps {
  value: boolean;
  onChange: () => void;
}
export interface WrapperContentProps {
  isTransparent?: boolean;
  canBack?: boolean;
  style?: StyleProp<ViewStyle>;
  title?: string;
}

export interface IFlexViewProps{
  style?: StyleProp<ViewStyle>
}

export interface IImageProps {
  name: PLACE;
  style: StyleProp<ImageStyle>;
}

export interface IIconsProps {
  name: string;
  height?: number;
  width?: number;
  viewBox?: string;
  preserveAspectRatio?: string;
  color?: ColorValue;
  title?: string;
  style?: StyleProp<ViewStyle>;
  fill?: ColorValue;
  stroke?:ColorValue;
}
export interface IButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export interface IBackButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface IDestinationProps {
  destination: IDestination;
  key: React.Key;
}

export interface IDestinationProps {
  destination: IDestination;
  key: React.Key;
}

export interface IStarsProps {
  value: number;
  textColor?: ColorValue;
}

export interface IPlaceProps{
  place: IDestination;
}

export interface IHeaderProps{
  title?: string;
  rightIcon?: React.ReactNode
}

export interface IHeartButtonProps {
  place: IDestination;
}