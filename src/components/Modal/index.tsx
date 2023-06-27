import { View, Text, Modal as RnModal, TouchableOpacity } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { IModalProps } from '@/utils/interfaces';
import style from './style';

export const Modal = ({
  visible,
  onClose,
  children,
}: PropsWithChildren<IModalProps>) => {
  return (
    <RnModal animationType="slide" visible={visible} transparent={true} onRequestClose={onClose}>
      <TouchableOpacity
        style={style.background}
        activeOpacity={1}
        onPress={onClose}>
        {children}
      </TouchableOpacity>
    </RnModal>
  );
};
