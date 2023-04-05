import { firebaseApp } from '../../credentials';
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import s from "../../styles/ProfileStyles";
import { useNavigation } from "@react-navigation/native";
import FormRegisterCar from "./profile/FormRegisterCar";
import NavBar from "../../components/NavBar";

const Profile = () => {

  const auth = getAuth(firebaseApp);
  const navigation = useNavigation();

  const [isRegistering, setIsRegistering] = useState(false);

  const getOut = () => {
    auth.signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  };

  if (isRegistering) {
    return (<FormRegisterCar setIsRegistering={setIsRegistering} />);
  } else {
    return (
      <SafeAreaView style={s.ScreenProfile}>
        <View style={s.Profile}>
          <TouchableOpacity
            style={s.ButtonSignOut}
            onPress={getOut}>
            <Text style={s.ButtonSignOutText}>Cerrar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.ButtonRegisterCar}
            onPress={() => { setIsRegistering(true); }}>
            <Text style={s.ButtonRegisterCarText}>Registrar mis datos</Text>
          </TouchableOpacity>
        </View>
        <NavBar />
      </SafeAreaView>
    );
  }
};

export default Profile;
