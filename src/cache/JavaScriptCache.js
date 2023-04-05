// App.js
/*
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}></Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
*/

// Login.js
/*
import { useNavigation } from "@react-navigation/native";

const navegation = useNavigation();

useEffect(() => {
  auth.onAuthStateChanged(user => {
    if (user) navegation.replace('Home');
  });
}, []);
*/

