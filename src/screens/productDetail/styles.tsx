import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      container: {
            backgroundColor: "#F7F6FA",
            flex: 1
      },
      headSection: {
            flexDirection: 'column',
            display: 'flex',
            height: 420,
      },
      backButton: {
            marginTop: 55,
            marginLeft: 20,
            zIndex: 10
      },
      imageSlider: {
            position: 'absolute',
            width: "100%",
            height: "100%",
            zIndex: 0,
      },
      priceLineContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
      },
      productInfoContainer: {
            paddingHorizontal: 16,
            paddingVertical: 20,
            backgroundColor: "#fff"
      },
      promoPercent: {
            backgroundColor: "#FF4141",
            color: "#fff",
            flexDirection: 'row',
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            fontSize: 12
      },
      curPrice: {
            marginLeft: 10,
            color: "#0F172A",
            fontWeight: "600",
            fontSize: 16
      },
      oldPrice: {
            marginLeft: 6,
            color: "#9CA1B8",
            fontSize: 12,
            textDecorationLine: "line-through"
      },
      productName: {
            color: "#3A3F55",
            fontSize: 16,
            marginTop: 14
      },
      rateContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 18
      },
      rateInfo: {
            flex: 1,
            fontSize: 12,
            color: "#6C728B"
      },
      optionContainer: {
            marginVertical: 12,
            marginHorizontal: 20,
            backgroundColor: "#fff",
            paddingHorizontal: 14,
            paddingVertical: 18,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center"

      },
      attributeIcon: {
            width: 20,
            height: 20
      },
      optionTitle: {
            marginLeft: 14,
            color: "#0F172A",
            fontSize: 14,
            flex: 1,
            fontWeight: "500" 
      },
      iconRightAngle: {
            width: 24,
            height: 24,
            resizeMode: 'center'
      },
      addCardWraper:{
            position:'absolute',
            bottom:0,
            width:"100%"
      }

})