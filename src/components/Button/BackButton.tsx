import React from "react";
import { TouchableOpacity } from "react-native"
import { Icons } from "../Icons";
import { IBackButtonProps } from "@/utils/interfaces";

export const BackButton = ({onPress, style}: IBackButtonProps) =>{
    return (
      <TouchableOpacity onPress={onPress} style={style}>
        <Icons name="arrowBack" />
      </TouchableOpacity>
    );
}