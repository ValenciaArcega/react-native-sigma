import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Sign } from '../screens/Sign';
import { Dashboard } from '../views/Dashboard';
import { Garage } from "../views/Garage";
import { Profile } from "../views/Profile";

const Stack = createNativeStackNavigator();

const Home = () => {

  return (
    <NavigationContainer independent="true">
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false, animation: "none" }}></Stack.Screen>

        <Stack.Screen
          name="Garage"
          component={Garage}
          options={{ headerShown: false, animation: "none" }}></Stack.Screen>

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false, animation: "none" }}  ></Stack.Screen>

        <Stack.Screen name="Sign" component={Sign} options={{ headerShown: false, animation: "slide_from_bottom" }}></Stack.Screen>

        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false, animation: "fade",
        }} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
