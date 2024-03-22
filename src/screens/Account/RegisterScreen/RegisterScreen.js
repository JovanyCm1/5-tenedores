import React from "react";
import { Text, View } from "react-native";
import { Image } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterForm } from "../../../components/Auth";
import { styles } from "./RegisterScreen.styles";
export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/canias.png")}
        style={styles.image}
      ></Image>

      <View style={styles.content}>
        <RegisterForm></RegisterForm>
      </View>
    </KeyboardAwareScrollView>
  );
}
