import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { styles } from "./UserGuestScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function UserGuestScreen() {
  const navigation = useNavigation();
  //////////////
  const goToLogin = () => {
    console.log("📢Ir al Login");
    navigation.navigate(screen.account.login);
  };
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>Consultar tu perfil de 5 tenders</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu restaurante favorito? Descubre y explora los
        mejores restaurantes de manera fácil, vota por tus favoritos y comparte
        tu experiencia dejando comentarios. Te invitamos a disfrutar de una
        experiencia gastronómica única y a compartir tus opiniones para ayudar a
        otros a encontrar sus lugares favoritos para comer.
      </Text>

      <View>
        <Button
          title="Ver tu perfil"
          onPress={goToLogin}
          buttonStyle={styles.btnStyle}
        ></Button>
      </View>
    </ScrollView>
  );
}
