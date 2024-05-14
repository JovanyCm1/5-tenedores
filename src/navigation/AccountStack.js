import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account/AccountScreen";
import { LoginScreen } from "../screens/Account/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen";
import { View, Image } from "react-native";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{
          headerTitle: props => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../../assets/img/canias-logo.png')} style={{ height: 40, width: 40 }} />
              <Image source={require('../../assets/img/5-tenedores-letras-icono-logo.png')} style={{ height: 40, width: 100, marginLeft: 10 }} />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{ title: "Iniciar Sesión" }}
      />
      <Stack.Screen
        name={screen.account.register}
        component={RegisterScreen}
        options={{ title: "Crea tu cuenta" }}
      />
    </Stack.Navigator>
  );
}
