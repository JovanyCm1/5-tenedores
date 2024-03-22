import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { InfoUser } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";
import { getAuth, signOut } from "firebase/auth";

export function UserLoggedScreen() {
  const logout = async () => {
    console.log("Cerrar sesión");
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <View>
      <Text> UserLoggedScreen </Text>
      <InfoUser />
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      ></Button>
    </View>
  );
}
