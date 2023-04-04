import { View, Text, TouchableOpacity } from "react-native";
import s from "../styles/NavBarStyles";
// import Icon from "react-native-vector-icons/MaterialIcons";
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
        <Text style={s.NavBarButtonText}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goSearch} style={[s.NavBarButton, { marginTop: -20 }]}>
        <Icon name="magnify" size={24} color="#181818" />
        <Text style={s.NavBarButtonText}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goAccount} style={s.NavBarButton}>
        <Icon name="account" size={24} color="#181818" />
        <Text style={s.NavBarButtonText}>Cuenta</Text>
      </TouchableOpacity>

    </View>
  );
};

export default NavBar;