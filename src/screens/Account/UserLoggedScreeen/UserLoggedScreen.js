import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { InfoUser } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";
export function UserLoggedScreen() {
  return (
    <View>
      <Text> UserLoggedScreen </Text>
      <InfoUser />
      <Button title="Cerrar sesion" buttonStyle={styles.btnStyles}></Button>
    </View>
  );
}
