import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Button, Icon } from "react-native-elements";
import { styles } from "./DiagnosticarScreen.styles";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";


export function DiagnosticarScreen() {

    const [facing, setFacing] = useState("back");
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);
    const [image, setImage] = useState("");

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing((current) => (current === "back" ? "front" : "back"));
    }

    const takePictureAndSave = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const photo = await cameraRef.current.takePictureAsync(options);
            const asset = await MediaLibrary.createAssetAsync(photo.uri);
            console.log("Saved photo to:", asset.uri);
        }
    };

    const handleImagePickerPress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].url);
        }
    };

    return (
        <View style={styles.container}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={{ ...styles.button, width: 50, height: 50 }}
                        icon={
                            <Icon
                                type="material-community"
                                name="camera-flip-outline"
                                size={30}
                                color="black"
                            />
                        }
                        onPress={toggleCameraFacing}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={takePictureAndSave}
                    >
                        <Image
                            source={require('../../../../assets/img/canias-logo.png')} // Reemplaza esto con la ruta a tu imagen
                            style={{ flex: 1, width: '75%', height: '75%' }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Button
                        buttonStyle={{ ...styles.button, width: 50, height: 50 }}
                        icon={
                            <Icon
                                type="material-community"
                                name="folder-multiple-image"
                                size={30}
                                color="black"
                            />
                        }
                        onPress={handleImagePickerPress}
                    />
                </View>
            </CameraView>
        </View>
    );
}
