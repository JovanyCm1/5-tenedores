import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  const navigation = useNavigation();
  const goToregister = () => {
    console.log("📢Ir al registro");
    navigation.navigate(screen.account.register);
  };

  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text>Estamos en el LoginScreen</Text>
        <Text onPress={goToregister}>Registrarse</Text>
      </View>
    </ScrollView>
  );
}
