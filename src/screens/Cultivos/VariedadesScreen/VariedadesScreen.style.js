import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "transparent",
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
    },
    contentCultivos: {
        alignItems: "center",
        margin: 15,
        borderWidth: 1,
        borderColor: "rgba(112, 112, 112, 0.5)", // Color del borde con transparencia
        borderRadius: 15,
        flexDirection: "row",
        flex: 1,
    },
    imageCultivos: {
        flex: 1,
        with: 100,
        height: 120,
        borderRadius: 15,
        margin: 10,
    },
});