import { StyleSheet } from 'react-native';
import { colors } from "./colors";

const s = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: '#1c7ed6'
  },
  containerRegister: {
    width: '90%',
    marginTop: 44,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  buttonBackLogin: {
    height: 44,
    width: 96,
    marginLeft: 10,
    marginTop: 6,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBackLoginText: {
    fontSize: 17,
    fontWeight: 500,
    color: '#1c7ed6'
  },
  formTitle: {
    marginVertical: 15,
    fontSize: 24,
    fontWeight: 700,
  },
  formText: {
    width: '86%',
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'justify',
    color: '#181818'
  },
  formInput: {
    height: 48,
    width: '86%',
    marginTop: 4,
    marginBottom: 20,
    paddingHorizontal: 8,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#e9e9e9'
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
    textAlign: 'left'
  },
  buttonRegister: {
    width: '85%',
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
  buttonRegisterText: {
    fontSize: 16,
    color: '#fff'
  }
});

export default s;