import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/SearchScreen";
import { View, Image } from "react-native";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function SearckStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.search.search}
                component={SearchScreen}
                options={{
                    headerTitle: props => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/img/canias-logo.png')} style={{ height: 40, width: 40 }} />
                            <Image source={require('../../assets/img/5-tenedores-letras-icono-logo.png')} style={{ height: 40, width: 100, marginLeft: 10 }} />
                        </View>
                    ),
                }}
            />
        </Stack.Navigator>
    )
}