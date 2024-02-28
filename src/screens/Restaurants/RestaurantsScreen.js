import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils";

export function RestaurantsScreen(props) {
  const { navigation } = props;

  const goToAddRestaurants = () => {
    navigation.navigate(screen.restaurant.addRestaurant);

    //  navigation.navigate(screen.account.tab, { screen: account.account });
  };

  return (
    <View>
      <Text>Estamos en la pantalla restaurants</Text>
      <Button title="Crear Restautrante" onPress={goToAddRestaurants} />
    </View>
  );
}
