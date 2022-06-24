import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    indicatorContainer: {
        position: 'absolute',
        width: "100%",
        bottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    indicatorText: {
        color: "#fff", backgroundColor: "#0F172A50",
        borderRadius: 16,
        paddingHorizontal: 6,
        paddingVertical: 2,
        fontSize:12
    }
})