import React from "react";
import { View, Text } from "react-native";
import { InfoForm } from "../../../components/Restaurants/AddRestaurant";
import { styles } from "./AddRestaurantScreen.styles";

export function AddRestaurantScreen() {
  return (
    <View>
      {/* <Text>AddRestaurantScreen</Text> */}
      <InfoForm />
    </View>
  );
}
