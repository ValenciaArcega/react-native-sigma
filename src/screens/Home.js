import { View } from 'react-native';
import Profile from "./home/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "../components/NavBar";

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <View>
      <Profile />
      <NavBar />
    </View>
  );
};

export default Home;
