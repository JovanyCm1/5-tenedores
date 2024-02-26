import { NavigationContainer } from "@react-navigation/native";
import { AppNavegation } from "./src/navegation/AppNavegation";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavegation />
      </NavigationContainer>
    </>
  );
}