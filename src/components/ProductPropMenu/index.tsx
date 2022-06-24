import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { ProductProperties } from '../../models/ProductProperties'

interface ProductPropMenuInterface {
    data: ProductProperties
}

export default function ProductPropMenu(props: ProductPropMenuInterface) {
    const { data } = props;
    const [curIndex, setCurIndex] = useState(-1);

    return (
        <>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.options}>
                {data.listData.map((value, index) => {

                    const onPressed = (event: GestureResponderEvent) => {
                        setCurIndex(index);
                    }

                    return (
                        <TouchableOpacity
                            onPress={onPressed}
                            disabled={!value.isStock} key={index}>
                            <Text style={[styles.optionTitle, {
                                opacity: !value.isStock ? 0.4 : 1,
                                color: !value.isStock ? "#4E5369" : "#3A3F55",
                                borderColor: index==curIndex?"#0F172A":"#D3D3E1",
                                fontWeight: index==curIndex?"600":"400",
                            }]}>{value.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </>
    )
}