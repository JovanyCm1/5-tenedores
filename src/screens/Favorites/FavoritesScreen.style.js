import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contentDiagnostico: {
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 15
    },
    contentExplorar: {
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 15,
        flexDirection: 'row',
    },
    imageDetectar: {
        width: 200,
        height: 200
    },
    imageExplorar: {
        flex: 1,
        height: 150,
        borderRadius: 15,
        margin: 10,
    },
    text: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20
    },
    button: {
        backgroundColor: '#18bfb5',
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10
    },
    searchBar: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    overlayText: {
        color: 'yellow',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contentOpciones: {
        alignItems: 'center',
        margin: 10,
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 15,
        flexDirection: 'row',
        flex: 1
    },
});