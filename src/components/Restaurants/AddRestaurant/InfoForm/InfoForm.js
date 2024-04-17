import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { MapForm } from "../MapForm";
import { styles } from "./InfoForm.styles";

export function InfoForm(props) {
  const { formik } = props;
  const [showMap, setShowMap] = useState(false);

  const onOpenCloseMap = () => {
    console.log("Abrir el mapa");
    setShowMap((prevState) => !prevState);
  };

  return (
    <>
      <View style={styles.content}>
        {/* <Text>InfoForm</Text> */}

        <Input
          placeholder="Nombre del restaudante"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
        ></Input>
        <Input
          placeholder="Dirección "
          rightIcon={{
            type: "material-community",
            name: "google-maps",
            color: "#c2c2c2",
            onPress: onOpenCloseMap,
          }}
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
      <MapForm show={showMap} close={onOpenCloseMap} formik={formik} />
    </>
  );
}
