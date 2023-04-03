import { View, Image, Text, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import s from "../styles/LoginStyles";

const Login = () => {
  return (
    <KeyboardAvoidingView style={s.screenLogin} behavior="padding">

      <View style={s.Login}>
        <ScrollView style={s.LoginScrollView}>
          <Image style={s.LoginImage} source={require('../../assets/img/login-userDoor.png')} />
          <Text style={s.LoginTitle}>Inicia Sesión</Text>

          <View behavior="padding" style={s.LoginContainerInput}>
            <Text style={s.LoginInputHeader}>Correo electrónico</Text>
            <TextInput style={s.LoginInput} placeholder="Ingresa un correo valido"></TextInput>
          </View>

          <View style={s.LoginContainerInput}>
            <Text style={s.LoginInputHeader}>Contraseña</Text>
            <TextInput style={s.LoginInput} placeholder="Ingresa tu contraseña" secureTextEntry></TextInput>
          </View>

          <TouchableOpacity style={s.LoginButtons}>
            <Text style={s.textButton}>Ingresar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[s.LoginButtons, s.RegisterButton]}>
            <Text style={s.textButton}>Registrarme</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

    </KeyboardAvoidingView >
  );
};

export default Login;
