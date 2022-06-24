import { View, Text, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native'
import React from 'react'
import styles from './styles'
import CircleButton from '../CircleButton'
import AppImages from '../../commons/AppImages';
import CommonButton from '../CommonButton';
import { useState } from 'react';

interface AddCardWraperInterface {
    style?: StyleProp<ViewStyle> | undefined;
    onPressAdd?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function AddCardWraper(props: AddCardWraperInterface) {
    const { style, onPressAdd } = props;
    const [isLove, setIsLove] = useState(false);

    const onPresLove = () => {
        setIsLove((val) => !val)
    }
    return (
        <View style={[styles.container, style]}>
            <CircleButton
                onPress={onPresLove}
                style={{
                    borderWidth: 4,
                    borderColor: "#EEEDF5"
                }}
                buttonSize={44}
                iconColor={isLove ? "#fff" : "#6C728B"}
                bgColor={isLove ? "#FDCC0B" : "#EEEDF5"}
                icon={isLove ? AppImages.loveIcon : AppImages.loveOutlineIcon} />
            <CommonButton
                disabled={false}
                onPress={onPressAdd}
                title={"THÊM VÀO GIỎ HÀNG"}
                style={styles.button} />
        </View>
    )
}