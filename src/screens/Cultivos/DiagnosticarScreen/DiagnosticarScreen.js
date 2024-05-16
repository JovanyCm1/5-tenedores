import React, { useState, useRef } from 'react';
import { Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button } from 'react-native-elements';
import { styles } from './DiagnosticarScreen.styles';
import * as MediaLibrary from 'expo-media-library';

export function DiagnosticarScreen() {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const takePictureAndSave = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const photo = await cameraRef.current.takePictureAsync(options);
            const asset = await MediaLibrary.createAssetAsync(photo.uri);
            console.log('Saved photo to:', asset.uri);
        }
    };

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <Button buttonStyle={styles.button} title="Take Picture" onPress={takePictureAndSave} />
                    <Button buttonStyle={styles.button} title="Flip Camera" onPress={toggleCameraFacing} />
                </View>
            </CameraView>
        </View>
    );
}