import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import About from "../views/About";
import { RootStackParam } from "../types";

const Stack = createNativeStackNavigator<RootStackParam>();

const routeScreenDefinitions = {
  headerStyle: {
    backgroundColor: "blue",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefinitions}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={routeScreenDefinitions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
