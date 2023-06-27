import { s } from "../styles/st-profile"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavBar } from "./NavBar"
import { KeyboardAvoidingView, ScrollView, TextInput, View, Text, TouchableOpacity, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import { db, firebaseApp } from '../credentials'
import { collection, doc, setDoc } from "firebase/firestore"
import { usuarios } from "../data/data-test"

export function Profile() {
  Icon.loadFont()
  const auth = getAuth(firebaseApp)
  const navigation = useNavigation()

  const [car, setCar] = useState({
    nombre: '',
    numero: '',
    marca: '',
    modelo: '',
    año: '',
  })

  function signOutUser() {
    auth.signOut()
      .then(() => navigation.replace('Sign'))
      .catch(err => Alert.alert(err.message))
  };

  const handleChangeText = (name, value) => setCar({ ...car, [name]: value })

  const registerCarData = async () => {
    try {
      const user = auth.currentUser
      const docRef = doc(collection(db, 'users'), user.email)
      await setDoc(docRef, {
        nombre: car.nombre,
        numero: car.numero,
        marca: car.marca,
        modelo: car.modelo,
        año: car.año,
      })
      Alert.alert('Guardado ✅')
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error: ", e)
    }
  }


  /* ⛔ To add 100 records
  const registerCarData = async () => {
    try {
      console.log('Guardando registros...');
      const user = auth.currentUser;
      usuarios.forEach(async function (item) {
        const docRef = doc(collection(db, 'users'), `${Math.random()}`);
        await setDoc(docRef, {
          nombre: item.nombre,
          apellido: item.apellido,
          marca: item.marca,
          modelo: item.modelo,
        });
        // console.log("Document written with ID: ", docRef.id);
      });
      Alert.alert('Registros cargados y guardados');
    } catch (e) {
      console.error("Error: ", e);
    }
  };
  */
  return (
    <KeyboardAvoidingView behavior="padding" style={{ marginTop: 32, flex: 1 }} >
      <ScrollView>
        <View style={s.Form}>

          <Text style={s.FormTitle}>Mi información</Text>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Nombre</Text>
            <TextInput
              style={s.Input}
              placeholder="Pedro Issac"
              type="text"
              inputMode="text"
              onChangeText={value => handleChangeText("nombre", value)}></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Numero</Text>
            <TextInput
              style={s.Input}
              placeholder="5540992376"
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              onChangeText={value => handleChangeText("numero", value)}></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Marca del vehiculo</Text>
            <TextInput
              style={s.Input}
              placeholder="Chevrolet"
              onChangeText={value => handleChangeText("marca", value)}></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Modelo del vehiculo</Text>
            <TextInput style={s.Input} placeholder="Aveo" onChangeText={value => handleChangeText("modelo", value)}></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Año del modelo</Text>
            <TextInput
              style={s.Input}
              placeholder="2023"
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              onChangeText={value => handleChangeText("año", value)}></TextInput>
          </View>

          <TouchableOpacity onPress={() => registerCarData()} style={s.ButtonRegisterCar}>
            <Text style={s.ButtonRegisterCarText}>Actualizar Datos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={signOutUser} style={s.ButtonRegisterCar}>
            <Text style={[s.ButtonRegisterCarText, s.btnSignOutText]}>Cerrar Sesión</Text>
          </TouchableOpacity>


        </View>
      </ScrollView>
      <NavBar />
    </KeyboardAvoidingView>
  )
};
