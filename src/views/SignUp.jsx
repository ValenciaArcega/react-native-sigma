import s from "../styles/st-signUp";
import { useState } from "react";
import { Alert, ScrollView, TextInput, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { firebaseApp } from '../credentials';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export function SignUp({ setIsRegistering }) {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleCreateUser() {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        // Alert.alert(user.email);
      })
      .catch(err => Alert.alert(err.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={s.keyboard}>
      <ScrollView>
        <View style={s.signUp}>

          <Text style={s.formTitle}>Crea una cuenta gratis</Text>

          <Text style={s.signUpLabel}>Nombre</Text>
          <TextInput style={s.signUpInput} placeholder="Ingresa tu nombre completo"></TextInput>

          <Text style={s.signUpLabel}>Correo Electrónico</Text>
          <TextInput onChangeText={text => setEmail(text)} style={s.signUpInput} placeholder="Ingresa un correo valido"></TextInput>

          <Text style={s.signUpLabel}>Contraseña</Text>
          <TextInput
            style={s.signUpInput}
            secureTextEntry
            placeholder="Crea una contraseña"
            onChangeText={text => setPass(text)}
          ></TextInput>
          <Text style={s.passTipTitle}>Una contraseña segura</Text>
          <Text style={s.passTip}>◉ Tiene al menos 8 caracteres</Text>
          <Text style={s.passTip}>◉ Combinación de letras minúsculas, mayúsculas, números, etc.</Text>

          <TouchableOpacity style={s.btnSignUp} onPress={handleCreateUser}>
            <Text style={s.btnSignUpText} >Registrarme</Text>
          </TouchableOpacity >

          <Text
            onPress={() => setIsRegistering(false)}
            style={s.textGoSignIn} >
            ¿Ya tienes una cuenta? Inicia Sesión
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}
