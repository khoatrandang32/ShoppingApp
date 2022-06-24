import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop: 12,
        paddingHorizontal: 17,
        paddingBottom: 32,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        
        elevation: 22,
    },
    button: {
        flex: 1,
        marginLeft: 10
    }
})