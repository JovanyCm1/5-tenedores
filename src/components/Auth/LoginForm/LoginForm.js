import { View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { styles } from "./LoginForm.styles";
import React, { useState } from "react"; ///

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false); ///
  const showHidenPassword = () => setShowPassword((prevState) => !prevState); ///
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo Electrónico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true} ////////
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"} ////
            iconStyle={styles.icon}
            onPress={showHidenPassword}
          />
        }
      />
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
