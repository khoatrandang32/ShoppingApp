import { View, Text, Image, TouchableOpacity, GestureResponderEvent, ViewStyle, StyleProp } from 'react-native'
import React from 'react'
import styles from './styles';


interface CommonButtonInterface {
    title?: String;
    disabled?: boolean;
    style?: StyleProp<ViewStyle> | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;

}

export default function CommonButton(props: CommonButtonInterface) {
    const { title, onPress, style, disabled = false } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.8}
            style={[styles.container, style]}>
            <Image
                style={[styles.imgBg, { opacity: disabled ? 0.2 : 1 }]}
                resizeMode={"cover"}
                source={require("../../../assets/images/bgButton.png")} />
            <Text style={styles.titleButon}>{title}</Text>
        </TouchableOpacity>
    )
}