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
      <Text style={styles.title}>Consultar tu perfil de CañIAs</Text>
      <Text style={styles.description}>
        Crear una cuenta en CañIAs te brinda acceso a una plataforma integral
        diseñada para revolucionar la gestión agrícola en el cultivo de caña de
        azúcar. Al registrarte, podrás disfrutar de una experiencia única en la
        que podrás acceder a una amplia gama de funcionalidades para optimizar
        tus operaciones agrícolas.
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
