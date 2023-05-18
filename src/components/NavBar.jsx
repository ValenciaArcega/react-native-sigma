import s from "../styles/st-navBar";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";


export function NavBar() {
  Icon.loadFont();
  const navegation = useNavigation();

  const goAccount = () => navegation.replace('Profile');
  const goGarage = () => navegation.replace('Garage');
  const goDashboard = () => navegation.replace('Dashboard');

  return (
    <View style={s.NavBar}>
      <TouchableOpacity onPress={goDashboard} style={s.NavBarButton}>
        <Icon name="car-convertible" size={28} color="#181818" />
        <Text style={s.NavBarButtonText}>Panel</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goGarage} style={s.NavBarButton}>
        <Icon name="car-wrench" size={24} color="#181818" />
        <Text style={s.NavBarButtonText}>Talleres</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goAccount} style={s.NavBarButton}>
        <Icon name="account" size={24} color="#181818" />
        <Text style={s.NavBarButtonText}>Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};
