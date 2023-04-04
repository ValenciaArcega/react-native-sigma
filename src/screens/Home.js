import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "./home/Search";
import Profile from "./home/Profile";
import Dashboard from './home/Dashboard';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator initialRouteName="Dashboard">

        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
