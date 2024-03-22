import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { AccountStack } from "./AccountStack";
import { FavoritesStack } from "./FavoritesStack";
import { RestaurantStack } from "./RestaurantStack";
import { RankingStack } from "./RankingStack";
import { SearckStack } from "./SearchStack";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#09583b",
        tabBarInactiveTintColor: "#79BB99",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Cultivos" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearckStack}
        options={{ title: "Clima" }}
      />
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Mapa" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screen.account.tab) {
    iconName = "account-outline";
  }

  if (route.name === screen.favorites.tab) {
    iconName = "tractor-variant";
  }

  if (route.name === screen.ranking.tab) {
    iconName = "star-outline";
  }

  if (route.name === screen.restaurant.tab) {
    iconName = "map-outline";
  }

  if (route.name === screen.search.tab) {
    iconName = "weather-partly-cloudy";
  }

  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
