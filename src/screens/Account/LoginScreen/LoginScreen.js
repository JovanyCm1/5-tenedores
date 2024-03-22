import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { LoginForm } from "../../../components/Auth";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  const navigation = useNavigation();
  const goToRegister = () => {
    console.log("📢Ir al registro");
    navigation.navigate(screen.account.register);
  };

  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />

      <Image
        source={require("../../../../assets/img/drawlogin.png")}
        style={styles.image}
      />

      <View style={styles.content}>
        <LoginForm />

        <Text style={styles.textRegister}>
          ¿Aún no tienes una cuenta?{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Registrarse
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
