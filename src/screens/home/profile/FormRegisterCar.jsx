import s from "../../../styles/st-formRegisterCar";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { db, firebaseApp } from '../../../credentials';
import { collection, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp);
Icon.loadFont();

const FormRegisterCar = ({ setIsRegistering }) => {

  const [car, setCar] = useState({
    nombre: '',
    niv: '',
    placa: '',
    verificacion: '',
    tenencia: '',
    engomado: ''
  });

  const handleChangeText = (name, value) => setCar({ ...car, [name]: value });

  const registerCarData = async () => {
    /*if (car.nombre === '') Alert.alert('El campo nombre es obligatorio');
    else if (car.niv === '') Alert.alert('El campo niv es obligatorio');
    else if (car.placa === '') Alert.alert('El campo placa es obligatorio');
    else if (car.verificacion === '') Alert.alert('El campo verificacion es obligatorio');
    else if (car.tenencia === '') Alert.alert('El campo tenencia es obligatorio');
    else if (car.engomado === '') Alert.alert('El campo engomado es obligatorio');
    else*/
    try {
      const user = auth.currentUser;
      const docRef = doc(collection(db, 'users'), user.email);
      await setDoc(docRef, {
        nombre: car.nombre,
        niv: car.niv,
        placa: car.placa,
        verificacion: car.verificacion,
        tenencia: car.tenencia,
        engomado: car.engomado
      });
      Alert.alert('Datos registrados con exito ✅');
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ marginTop: 32, flex: 1 }} >
      <ScrollView>
        <View style={s.Form}>
          <TouchableOpacity onPress={() => setIsRegistering(false)} style={s.ButtonBackProfile}>
            <Icon name="close-circle" size={26} color="#f03e3e" />
            <Text style={{ marginLeft: 4, fontSize: 18, color: '#f03e3e' }}>Cancelar</Text>
          </TouchableOpacity>

          <Text style={s.FormTitle}>Registra tus datos</Text>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Nombre</Text>
            <TextInput style={s.Input} placeholder="Ingresa tu nombre completo" onChangeText={value => handleChangeText("nombre", value)}></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>NIV</Text>
            <TextInput style={s.Input} placeholder="Número de identificación vehicular" onChangeText={value => handleChangeText("niv", value)}></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Placa</Text>
            <TextInput style={s.Input} placeholder="Clave completa de la placa" onChangeText={value => handleChangeText("placa", value)}></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Ultima verificación</Text>
            <TextInput style={s.Input} placeholder="Fecha de verificación" onChangeText={value => handleChangeText("verificacion", value)}></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Ultimo pago de tenencia</Text>
            <TextInput style={s.Input} placeholder="Fecha de pago" onChangeText={value => handleChangeText("tenencia", value)}></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Tipo de engomado</Text>
            <TextInput style={s.Input} placeholder="Engomado del vehiculo" onChangeText={value => handleChangeText("engomado", value)}></TextInput>
          </View>

          <TouchableOpacity onPress={() => registerCarData()} style={s.ButtonRegisterCar}>
            <Text style={s.ButtonRegisterCarText}>Registrar mis datos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormRegisterCar;
