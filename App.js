import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { firebaseApp } from './src/credentials';

// const Stack = createNativeStackNavigator();
const auth = getAuth(firebaseApp);


export default function App() {
  const [globalUser, setGlobalUser] = useState(null);
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setGlobalUser(firebaseUser);
    } else {
      setGlobalUser(null);
    }
  });
  return (
    <>
      {globalUser
        ? <Home userMail={globalUser.email} />
        : <Login />
      }
    </>
  );

  /*return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );*/
}
