import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'red',
        marginBottom: 64,
        position: 'absolute', // Cambia a posición absoluta
        bottom: 0, // Alinea al fondo
        flexDirection: 'column',
        width: '100%',
    },
    button: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#18bfb5',
        borderRadius: 15,
        margin: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});