import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { LoadingModal } from "../../../components";
import { styles } from "./UserLoggedScreen.styles";
import { getAuth, signOut } from "firebase/auth";

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [reload, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  const logout = async () => {
    console.log("Cerrar sesión");
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <View>
      <Text> UserLoggedScreen </Text>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <AccountOptions onReload={onReload} />

      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      ></Button>

      <LoadingModal show={loading} text={loadingText} />
    </View>
  );
}
