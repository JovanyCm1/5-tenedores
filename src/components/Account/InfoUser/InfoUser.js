import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { getAuth } from "firebase/auth"; ////////no se si haya error aqui con acento aqui pero tengo el teclado en ingles y me da hueva aplanarle a "wind +  espacio" dos veces y luego regresarlo a ingles
import { styles } from "./InfoUser.styles";

export function InfoUser() {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const changeAvatar = () => {
    console.log("Cambiar avatar");
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
