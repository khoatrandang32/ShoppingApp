import { View, Text, TouchableOpacity, Image, StyleProp, ViewStyle, ImageSourcePropType, ColorValue, GestureResponderEvent } from 'react-native'
import React from 'react'
import AppImages from '../../commons/AppImages'

import styles from './styles'


interface CircleButtonInterface {
  icon: ImageSourcePropType;
  style?: StyleProp<ViewStyle> | undefined;
  bgColor?: ColorValue | undefined;
  iconColor?: ColorValue | undefined;
  iconSize?: number | string | undefined;
  buttonSize?: number | string | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;

}


export default function CircleButton(props: CircleButtonInterface) {
  const {
    icon,
    style,
    bgColor = "#fff",
    iconSize = 24,
    buttonSize = 38,
    iconColor = "#000",
    onPress
  } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style,
    { backgroundColor: bgColor, width: buttonSize, height: buttonSize }]}>
      <Image style={[styles.imgIcon, {
        width: iconSize, height: iconSize,
        tintColor: iconColor
      }]} source={icon} />
    </TouchableOpacity>
  )
}