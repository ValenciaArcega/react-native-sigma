import s from "../styles/NavBarStyles";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

Icon.loadFont();

const NavBar = () => {

  const navegation = useNavigation();

  const goAccount = () => navegation.replace('Profile');
  const goSearch = () => navegation.replace('Search');
  const goDashboard = () => navegation.replace('Dashboard');

  return (
    <View style={s.NavBar}>
      <TouchableOpacity onPress={goDashboard} style={s.NavBarButton}>
        <Icon name="monitor-dashboard" size={24} color="#181818" />
        <Text style={s.NavBarButtonText}>Panel</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goSearch} style={[s.NavBarButton, s.NavBarButtonSearch]}>
        <Icon name="magnify" size={24} color="#fff" />
        <Text style={[s.NavBarButtonText, s.NavBarButtonSearchText]}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goAccount} style={s.NavBarButton}>
        <Icon name="account" size={24} color="#181818" />
        <Text style={s.NavBarButtonText}>Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
