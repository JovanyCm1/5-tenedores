import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { styles } from "./RegisterForm.styles";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import Toast from "react-native-toast-message";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false); //**** */ mostrar /cultar icono
  const navigation = useNavigation(); //******* */  mostrar /cultar icono
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        //navigation.navigate(screen.account.account);
        navigation.navigate(screen.account.account);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al registarse, intentelo mas tarde...",
        });

        console.log("!!!!Error!!!!");
      }
      // console.log("Formulario enviado 📢");
      // console.log(formValue);
    },
  });

  const showHidenPassword = () => setShowPassword((prevState) => !prevState); //// mostrar /cultar icono

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.icon}
          ></Icon>
        }
        onChangeText={(text) => {
          formik.setFieldValue("email", text);
        }}
        errorMessage={formik.errors.email}
      ></Input>

      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true} /// mostrar /cultar icono
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"} /// mostrar /cultar icono
            iconStyle={styles.icon}
            onPress={showHidenPassword}
          ></Icon>
        }
        onChangeText={(text) => {
          formik.setFieldValue("password", text);
        }}
        errorMessage={formik.errors.password}
      ></Input>

      <Input
        placeholder="Confirmar contrasena"
        containerStyle={styles.input}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type="material-community"
            name="check-circle-outline"
            iconStyle={styles.icon}
          ></Icon>
        }
        onChangeText={(text) => {
          formik.setFieldValue("repeatPassword", text);
        }}
        errorMessage={formik.errors.repeatPassword}
      ></Input>

      <Button
        title="Unirse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      ></Button>
    </View>
  );
}
