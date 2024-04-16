import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { styles } from "./InfoForm.styles";

export function InfoForm(props) {
  const { formik } = props;
  return (
    <View style={styles.content}>
      {/* <Text>InfoForm</Text> */}

      <Input
        placeholder="Nombre del restaudante"
        onChangeText={(text) => formik.setFieldValue("name", text)}
        errorMessage={formik.errors.name}
      ></Input>
      <Input
        placeholder="Dirección "
        onChangeText={(text) => formik.setFieldValue("address", text)}
        errorMessage={formik.errors.address}
      ></Input>
      <Input
        placeholder="Teléfono"
        onChangeText={(text) => formik.setFieldValue("phone", text)}
        errorMessage={formik.errors.phone}
      ></Input>
      <Input
        placeholder="Email"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      ></Input>
      <Input
        placeholder="Descripción"
        multiline={true}
        inputContainerStyle={styles.textArea}
        onChangeText={(text) => formik.setFieldValue("description", text)}
        errorMessage={formik.errors.description}
      ></Input>
    </View>
  );
}
