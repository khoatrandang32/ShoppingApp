import { View, Text, Image, Dimensions,FlatList, StyleProp, ViewStyle, ListRenderItem, ImageSourcePropType, ListRenderItemInfo, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';

interface ImageSliderInterface{
  data: String[];
  style?: StyleProp<ViewStyle> | undefined;
 
}

export default function ImageSlider(props:ImageSliderInterface) {

  const { data,style } = props;

  const [curIndex, setCurIndex] = useState(0);
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  const renderItem = ({ item, index }:any ) => {
    return (
      <Image
        style={{
          width: layout.width,
          height: layout.height,
        }}
        resizeMode={'cover'}
        source={item}
      />
    );
  }

  const setLayoutData = (event:LayoutChangeEvent) => {
    setLayout(event.nativeEvent.layout);
  }

  const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {

    var index= Math.round(event.nativeEvent.contentOffset.x/layout.width);
    setCurIndex(index)

  }

  return (
    <View style={style}>
      <FlatList
        // onScroll={handleScroll}
        onMomentumScrollEnd={handleScroll}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onLayout={setLayoutData}
        horizontal
        renderItem={renderItem}
        data={data}
        keyExtractor={((item: String, index: number) => item+index.toString())}
      />
      <View style={styles.indicatorContainer}>
        <Text style={styles.indicatorText} >{curIndex+1}/{data.length}</Text>
      </View>
    </View>
  )
}