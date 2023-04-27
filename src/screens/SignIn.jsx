import s from "../styles/st-signIn";
import { useEffect, useState } from "react";
import { View, Image, Text, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { firebaseApp } from '../credentials';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { makeDark } from "../styles/colors";

export function SingIn({ setIsRegistering }) {
  // var
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  // fn 
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        // Alert.alert('Bienvenido ' + user.email);
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  };
  // hooks
  // cm
  return (
    <KeyboardAvoidingView style={s.container} behavior="padding">
      <View style={s.login}>
        <ScrollView style={s.loginScrollView}>
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

          <TouchableOpacity
            style={s.btnSignIn}
            onPress={handleSignIn}>
            <Text style={s.btnSignInText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={s.TextBetweenButtons}>¿No tienes una cuenta?</Text>

          <Text
            style={[s.btnSignInText, s.labelGoSignUp]}
            onPress={() => setIsRegistering(true)}>
            Registrate
          </Text>
        </ScrollView>
      </View>
    </KeyboardAvoidingView >
  );
}