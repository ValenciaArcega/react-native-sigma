import { StyleSheet } from 'react-native';
import { colors } from "./colors";

const s = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: '#f2f2f7'
  },
  signUp: {
    width: '90%',
    marginTop: 32,
    marginBottom: 16,
    paddingBottom: 8,
    borderRadius: 15,
    borderWidth: 2,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#d8d8d8',
    backgroundColor: '#fff'
  },
  textGoSignIn: {
    marginBottom: 12,
    fontSize: 15,
    fontWeight: 500,
    color: '#1c7ed6'
  },
  formTitle: {
    marginVertical: 25,
    fontSize: 24,
    fontWeight: 700,
  },
  signUpLabel: {
    width: '84%',
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'justify',
    color: '#181818'
  },
  signUpInput: {
    height: 48,
    width: '84%',
    marginTop: 4,
    marginBottom: 20,
    paddingHorizontal: 8,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    borderBottomColor: colors.mainColor,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomWidth: 2.2,
  },
  passTipTitle: {
    width: '80%',
    marginTop: -14,
    marginBottom: 4,
    fontWeight: 600,
    textAlign: 'justify',
    color: '#1c7ed6',
  },
  passTip: {
    width: '80%',
    fontWeight: 400,
    lineHeight: 20,
    textAlign: 'left'
  },

  btnSignUp: {
    width: '84%',
    height: 48,
    marginVertical: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c7ed6',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 0
    }
  },
  btnSignUpText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#fff'
  }
});

export default s;