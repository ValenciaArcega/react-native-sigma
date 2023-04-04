import { View, Image, Text, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import s from "../styles/LoginStyles";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase';
import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navegation = useNavigation();

  useEffect(() => {
    const unSuscribed = auth.onAuthStateChanged(user => {
      if (user) navegation.replace('Home');
    });

    return unSuscribed;
  }, []);

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        navegation.navigate('Home');
        Alert.alert('Cuenta creada. Bienvenido');
        const user = userCredential.user;
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        navegation.navigate('Home');
        Alert.alert('Bienvenido');
        const user = userCredential.user;
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  };

  return (
    <KeyboardAvoidingView style={s.screenLogin} behavior="padding">

      <View style={s.Login}>
        <ScrollView style={s.LoginScrollView}>
          <Image style={s.LoginImage} source={require('../../assets/img/login-userDoor.png')} />
          <Text style={s.LoginTitle}>Inicia Sesión</Text>

          <View behavior="padding" style={s.LoginContainerInput}>
            <Text style={s.LoginInputHeader}>Correo electrónico</Text>
            <TextInput
              style={s.LoginInput}
              onChangeText={text => setEmail(text)}
              placeholder="Ingresa un correo valido"
            ></TextInput>
          </View>

          <View style={s.LoginContainerInput}>
            <Text style={s.LoginInputHeader}>Contraseña</Text>
            <TextInput
              style={s.LoginInput}
              onChangeText={text => setPass(text)}
              placeholder="Ingresa tu contraseña"
              secureTextEntry
            ></TextInput>
          </View>

          <TouchableOpacity style={s.LoginButtons} onPress={handleSignIn}>
            <Text style={s.textButton}>Ingresar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[s.LoginButtons, s.RegisterButton]} onPress={handleCreateUser}>
            <Text style={s.textButton}>Registrarme</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

    </KeyboardAvoidingView >
  );
};

export default Login;
