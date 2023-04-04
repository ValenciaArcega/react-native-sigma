import { Text, TouchableOpacity } from "react-native";
import s from "../../styles/ProfileStyles";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebase';
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { Alert } from "react-native";
import NavBar from "../../components/NavBar";

const Profile = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  const getOut = () => {
    auth.signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  };

  return (
    <>
      <TouchableOpacity
        style={s.ButtonSignOut}
        onPress={getOut}>
        <Text style={s.ButtonSignOutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
      <NavBar />
    </>
  );
};

export default Profile;
