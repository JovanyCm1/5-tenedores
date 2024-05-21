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
        backgroundColor: 'white',
        marginBottom: 0,
        position: 'absolute', // Cambia a posición absoluta
        bottom: 50, // Alinea al fondo
        flexDirection: 'row',
        width: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 10,
        width: 100,
        height: 100,
        justifyContent: 'center',
        marginBottom: 30,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#18bfb5',
    },
});