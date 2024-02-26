import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function SearckStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.search.search}
                component={SearchScreen}
                options={{ title: "Buscar" }}
            />
        </Stack.Navigator>
    )
}