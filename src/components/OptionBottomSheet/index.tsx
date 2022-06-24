import { View, Text, Modal, Image, TouchableOpacity, ScrollView, TextInput, GestureResponderEvent } from 'react-native'
import React, { LegacyRef } from 'react'
import styles from './styles'
import AppImages from '../../commons/AppImages';
import ProductPropMenu from '../ProductPropMenu';
import { ProductProperties } from '../../models/ProductProperties';
import AddCardWraper from '../AddCardWraper';
import { useState } from 'react';

interface OptionBottomSheetInterface {
    data: Array<ProductProperties>,
    visible: boolean;
    onClickOutside?: (() => void) | undefined;
    onClickClose?: (() => void) | undefined;
    onClickAdd?: (() => void) | undefined;

}

export default function OptionBottomSheet(props: OptionBottomSheetInterface) {

    const { data, visible, onClickClose, onClickAdd, onClickOutside } = props;

    const [qty,setQty]= useState(0);

    const onStartShouldSetResponder = () => {
        if (onClickOutside) onClickOutside();
        return true;
    }

    const onPressClose = () => {
        if (onClickClose) onClickClose();
        return true;
    }

    const onPressAdd = () => {
        if (onClickAdd) onClickAdd();
        return true;
    }

    const onMinus=()=>{
        if(qty>0){
            setQty((val)=>val-1);
        }
    }

    const onAdd=()=>{
        setQty((val)=>val+1);
    }

    return (
        <Modal animationType='fade' visible={visible} accessible={true} transparent
            statusBarTranslucent={true} >
            <View style={styles.wrapper}>
                <View onTouchStart={onStartShouldSetResponder}  style={styles.background}/>
                <View style={styles.container}>
                    <View style={styles.headerSection}>
                        <Text style={styles.headerText}>Chọn phân loại</Text>
                        <TouchableOpacity onPress={onPressClose}>
                            <Image style={styles.closeButton} source={AppImages.iconClose} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.contentContainer}>
                        {data.map((val, index) => {
                            return (
                                <ProductPropMenu data={val} key={index} />
                            );
                        })}
                        <View style={styles.bottomSection}>
                            <Text style={styles.qty}>SỐ LƯỢNG</Text>
                            <TouchableOpacity onPress={onMinus} style={styles.qtyBtn}>
                                <Image style={styles.qtyBtnImg} source={AppImages.minusIcon} />
                            </TouchableOpacity>
                            <TextInput editable={false} keyboardType={"numeric"} style={styles.qtyInput} value={qty.toString()} />
                            <TouchableOpacity onPress={onAdd} style={styles.qtyBtn}>
                                <Image style={styles.qtyBtnImg} source={AppImages.addIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <AddCardWraper onPressAdd={onPressAdd} />

                </View>
            </View>

        </Modal>
    );
}