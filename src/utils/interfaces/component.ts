import { style } from './../../screens/SignIn/style';
import { FavoritePlace } from './../../screens/SignUp/FavoritePlace';
import { ColorValue, ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native/types";
import { PLACE } from "../enums";
import { IDestination } from "./action";
import { IUser } from './app';

export interface ISearchBarProps {
  onSearch: (value: string) => void;
  value?: string;
}
export interface ISwitchProps {
  value: boolean;
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
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
  backgroundColor?: ColorValue;
  color?: ColorValue;
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
export interface IModalProps {
  visible: boolean;
  onClose: () => void;
}

export interface IAvatarProps{
  user: IUser 
}