import s from "../../styles/st-profile";
import NavBar from "../../components/NavBar";
import FormRegisterCar from "./profile/FormRegisterCar";
import { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { firebaseApp } from '../../credentials';

const auth = getAuth(firebaseApp);

const Profile = () => {

  const [isRegistering, setIsRegistering] = useState(false);
  const navigation = useNavigation();

  const signOutUser = () => {
    auth.signOut()
      .then(() => {
        navigation.replace('Sign');
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
            style={s.ButtonRegisterCar}
            onPress={() => { setIsRegistering(true); }}>
            <Text style={s.ButtonRegisterCarText}>Actualizar mis datos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.ButtonSignOut}
            onPress={signOutUser}>
            <Text style={s.ButtonSignOutText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
        <NavBar />
      </SafeAreaView>
    );
  }
};

export default Profile;
