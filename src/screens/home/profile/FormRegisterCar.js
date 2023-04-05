import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import s from "../../../styles/FormRegisterCarStyles";

Icon.loadFont();

const FormRegisterCar = ({ setIsRegistering }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ marginTop: 16, flex: 1 }} >
      <ScrollView>
        <View style={s.Form}>

          <TouchableOpacity onPress={() => { setIsRegistering(false); }} style={s.ButtonBackProfile}>
            <Icon name="close-circle" size={26} color="#f03e3e" />
            <Text style={{ marginLeft: 4, fontSize: 18, color: '#f03e3e' }}>Cancelar</Text>
          </TouchableOpacity>

          <Text style={s.FormTitle}>Registra tus datos</Text>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Nombre</Text>
            <TextInput style={s.Input} placeholder="Ingresa tu nombre completo"></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>NIV</Text>
            <TextInput style={s.Input} placeholder="Número de identificación vehicular"></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Placa</Text>
            <TextInput style={s.Input} placeholder="Número completo de placa"></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Ultima verificación</Text>
            <TextInput style={s.Input} placeholder="Fecha de verificación"></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Ultimo pago de tenencia</Text>
            <TextInput style={s.Input} placeholder="Fecha de pago"></TextInput>
          </View>

          <View style={s.ContainerInput}>
            <Text style={s.ContainerInputText}>Tipo de engomado</Text>
            <TextInput style={s.Input} placeholder="Engomado del vehiculo"></TextInput>
          </View>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormRegisterCar;
