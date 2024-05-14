import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../screens/Mapa/RestaurantsScreen";
import { AddRestaurantScreen } from "../screens/Mapa/AddRestaurantScreen";
import { View, Image } from "react-native";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantsScreen}
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
        name={screen.restaurant.addRestaurant}
        component={AddRestaurantScreen}
        options={{ title: "Nuevo restaurante" }}
      />
    </Stack.Navigator>
  );
}
