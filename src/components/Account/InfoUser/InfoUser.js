import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { getAuth } from "firebase/auth"; ////////no se si haya error aqui con acento aqui pero tengo el teclado en ingles y me da hueva aplanarle a "wind +  espacio" dos veces y luego regresarlo a ingles
import { styles } from "./InfoUser.styles";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export function InfoUser(props) {
  const { setLoading, setLoadingText } = props;
  const { uid, photoURL, displayName, email } = getAuth().currentUser;

  const changeAvatar = async () => {
    //funcion para cambiar el avatar
    console.log("Cambiar avatar");
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, //tipo de archivo
      allowsEditing: true, //permite editar la imagen
      aspect: [4, 3], //aspecto de la imagen
    });

    console.log(result); //muestra en consola la imagen seleccionada

    if (!result.cancelled) uploadImage(result.uri); //si no se cancela la seleccion de la imagen, se sube la imagen a firebase
  };

  const uploadImage = async (uri) => {
    setLoadingText("Actualizando avatar");
    setLoading(true);

    const response = await fetch(uri); //se obtiene la imagen
    const blob = await response.blob(); //se convierte la imagen a blob

    const storage = getStorage(); //se obtiene el storage de firebase
    const storageRef = ref(storage, `avatar/${uid}`); //se crea una referencia al storage de firebase

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoUrl(snapshot.metadata.fullPath); //se actualiza la foto
      console.log(snapshot.metadata); //muestra en consola que la imagen se subio
    }); //se sube la imagen a firebase

    //console.log(uri);
  };

  const updatePhotoUrl = async (imagePath) => {
    console.log(imagePath);
    setLoading(false); //se quita el loading
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        icon={{ type: "material", name: "person" }} // si no tiene foto se muestra el icono
        // source={{ uri: "C:\\Users\\jaime\\Downloads\\inge.png" }} // si tiene foto en firebase se muestra este
        source={{ uri: photoURL }} // si tiene foto en firebase se muestra este
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>

      <View>
        <Text style={styles.displayName}> {displayName || "Anonimo"} </Text>

        <Text> {email} </Text>
      </View>
    </View>
  );
}
