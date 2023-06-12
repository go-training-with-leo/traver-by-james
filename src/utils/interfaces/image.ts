import { ImageStyle, StyleProp } from "react-native";
import { PLACE } from "../enums";
import { ImageProps } from "react-native-svg";

export interface IImageProps {
    name: PLACE;
    style: StyleProp<ImageStyle>
}