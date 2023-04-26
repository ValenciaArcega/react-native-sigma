import s from "../styles/st-signUp";
import { useState } from "react";
import { Alert, ScrollView, TextInput, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { firebaseApp } from '../credentials';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export function SignUp({ setIsRegistering }) {
  // var
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  // fn
  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        // Alert.alert(user.email);
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  };
  //cm
  return (
    <KeyboardAvoidingView behavior="padding" style={s.keyboard}>
      <ScrollView>
        <View style={s.containerRegister}>

          <TouchableOpacity style={s.buttonBackLogin} onPress={() => setIsRegistering(false)} >
            <Icon name="chevron-left" size={18} color="#1c7ed6" />
            <Text style={s.buttonBackLoginText} >Regresar</Text>
          </TouchableOpacity >

          <Text style={s.formTitle}>Crea una cuenta gratis</Text>

          <Text style={s.formText}>Nombre</Text>
          <TextInput style={s.formInput} placeholder="Ingresa tu nombre completo"></TextInput>

          <Text style={s.formText}>Correo Electrónico</Text>
          <TextInput onChangeText={text => setEmail(text)} style={s.formInput} placeholder="Ingresa un correo valido"></TextInput>

          <Text style={s.formText}>Contraseña</Text>
          <TextInput
            style={s.formInput}
            secureTextEntry
            placeholder="Crea una contraseña"
            onChangeText={text => setPass(text)}
          ></TextInput>
          <Text style={s.passTipTitle}>Una contraseña segura...</Text>
          <Text style={s.passTip}>Tiene al menos 8 caracteres</Text>
          <Text style={s.passTip}>Combinación de letras, números, etc.</Text>

          <TouchableOpacity style={s.buttonRegister} onPress={handleCreateUser}>
            <Text style={s.buttonRegisterText} >Registrarme</Text>
          </TouchableOpacity >

        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}
