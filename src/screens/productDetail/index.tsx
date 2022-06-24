import React, { useState } from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import AppImages from '../../commons/AppImages'
import AddCardWraper from '../../components/AddCardWraper'
import CircleButton from '../../components/CircleButton'
import ImageSlider from '../../components/ImageSlider'
import OptionBottomSheet from '../../components/OptionBottomSheet'
import { ProductProperties } from '../../models/ProductProperties'
import styles from './styles'

export default function ProductDetailScreen() {

  const sliderImgs = [
    require('../../../assets/images/shirt1.png'),
    require('../../../assets/images/shirt1.png'),
    require('../../../assets/images/shirt1.png'),
    require('../../../assets/images/shirt1.png'),
    require('../../../assets/images/shirt1.png'),
    require('../../../assets/images/shirt1.png'),
    require('../../../assets/images/shirt1.png'),
    require('../../../assets/images/shirt1.png'),
    require('../../../assets/images/shirt1.png'),
    require('../../../assets/images/shirt1.png'),
  ]

  const productPropsData: Array<ProductProperties> = [
    {
      title: "MÀU SẮC",
      listData: [
        { title: "Đen", isStock: true },
        { title: "Trắng", isStock: false },
        { title: "Xanh", isStock: true }
      ]
    },
    {
      title: "KÍCH THƯỚC",
      listData: [
        { title: "S", isStock: true },
        { title: "M", isStock: true },
        { title: "L", isStock: true },
        { title: "XL", isStock: true },
        { title: "2XL", isStock: true },
      ]
    },
  ]

  const STAR_RATE = 5;

  const generateList = (size: Number) => {
    var list = [];
    for (var x = 0; x < size; x++) {
      list.push(x)
    }
    return list;
  }

  const [isShowBottomSheet, setIsShowBottomSheet] = useState(false);

  const showBottomSheet = () => {
    setIsShowBottomSheet(true);
  }

  const hideBottomSheet = () => {
    setIsShowBottomSheet(false);
  }

  return (
    <View style={styles.container} >
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"#00000000"} />
      <View style={styles.headSection}>
        <CircleButton
          bgColor={"#fff"}
          icon={AppImages.iconLeftAngle}
          style={styles.backButton}
        />
        <ImageSlider
          data={sliderImgs}
          style={styles.imageSlider} />
      </View>

      <View style={styles.productInfoContainer}>

        <View style={styles.priceLineContainer}>
          <Text style={styles.promoPercent} >
            10%
          </Text>
          <Text style={styles.curPrice}>406.000đ</Text>
          <Text style={styles.oldPrice}>406.000đ</Text>
        </View>
        <Text style={styles.productName}>Solid Pocket Button Lapel Long Sleeve Blue Cotton 100%</Text>

        <View style={styles.rateContainer}>
          {
            generateList(5).map((val, index) => {
              return (
                <Image
                  key={index}
                  style={{
                    tintColor: index <= (STAR_RATE - 1) ? "#FDCC0B" : "#d1d1d1",
                    width: 13,
                    height: 13,
                    resizeMode: "cover",
                    marginRight: 4
                  }} source={AppImages.starIcon} />
              );
            })
          }

          <Text style={styles.rateInfo}> 996 • Đã bán 1201</Text>
          <CircleButton
            iconSize={20}
            buttonSize={32}
            icon={AppImages.loveIcon}
            iconColor={"#fff"}
            bgColor={"#FDCC0B"} />
        </View>
      </View>
      <TouchableOpacity onPress={showBottomSheet} style={styles.optionContainer}>
        <Image style={styles.attributeIcon} source={AppImages.attributeIcon} />
        <Text style={styles.optionTitle}>Màu, Kích thước</Text>
        <Image style={styles.iconRightAngle} source={AppImages.iconRightAngle} />
      </TouchableOpacity>
      <View style={{
        backgroundColor: "#fff",
        flex: 1
      }} />
      <OptionBottomSheet
        onClickAdd={hideBottomSheet}
        onClickOutside={hideBottomSheet}
        onClickClose={hideBottomSheet}
        visible={isShowBottomSheet}
        data={productPropsData} />
      <AddCardWraper onPressAdd={showBottomSheet} style={styles.addCardWraper} />
    </View>
  )
}