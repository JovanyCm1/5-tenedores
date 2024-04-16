import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { styles } from "./InfoForm.styles";

export function InfoForm() {
  return (
    <View style={styles.content}>
      {/* <Text>InfoForm</Text> */}

      <Input placeholder="Nombre del restaudante"></Input>
      <Input placeholder="Dirección del restauante"></Input>
      <Input
        placeholder="Descripción del restauante"
        multiline={true}
        inputContainerStyle={styles.textArea}
      ></Input>
    </View>
  );
}
