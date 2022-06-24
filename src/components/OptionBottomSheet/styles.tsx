import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    wrapper: {
        flex: 1,
    },
    background: {
        backgroundColor: "#40404070",
        flex: 1,
    },
    headerSection: {
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        flex: 1,
        fontWeight: "700",
        color: "#0F172A",
        fontSize: 16
    },
    closeButton: {
        height: 22,
        width: 22,
        resizeMode: "cover"
    },
    line: {
        height: 1,
        backgroundColor: "#EEEDF5"
    },
    contentContainer: {
        padding: 16,
        marginBottom: 7
    },
    bottomSection: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 24
    },
    qty: {
        flex: 1,
        fontSize: 12,
        color: "#0F172A",
        fontWeight: "500"
    },
    qtyBtn: {
        backgroundColor: "#F7F6FA",
        height: 40,
        width: 56,
        justifyContent: "center",
        alignItems: "center",
    },
    qtyBtnImg: {
        resizeMode: "center",
        height: 30,
        width: 30
    },
    qtyInput: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 50,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 14,
        fontWeight: "500",
        marginHorizontal: 8,
        borderWidth: 1,
        color: "#0F172A",
        borderColor: "#D3D3E1"
    }
})