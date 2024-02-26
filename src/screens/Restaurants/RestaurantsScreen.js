import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { screen } from "../../utils"

export function RestaurantsScreen(props) {
    const { navigation } = props;

    const goToRestaurants = () => {
        //navigation.navigate(screen.account.tab, { screen: screen.account.account });
        navigation.navigate(screen.restaurant.addRestaurant);
    }

    return (
        <View>
            <Text>RestaurantsScreens</Text>
            <Button title="Crear Restautrante" onPress={goToRestaurants} />
        </View>
    )
}