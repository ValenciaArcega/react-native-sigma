import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  Form: {
    paddingBottom: 64
  },
  FormTitle: {
    marginTop: 24,
    marginLeft: 16,
    fontSize: 28,
    fontWeight: 700,
    letterSpacing: -1,
  },
  ContainerInput: {
    width: '90%',
    marginTop: 16,
    alignSelf: 'center',
  },
  ContainerInputText: {
    marginLeft: 6,
    fontSize: 18,
    fontWeight: 600
  },
  Input: {
    height: 44,
    marginTop: 6,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 18,
    backgroundColor: '#fff',
  },




  ScreenProfile: {
    flex: 1,
  },
  Profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonSignOut: {
    width: "80%",
    height: 48,
    marginTop: 20,
    borderRadius: 12,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f03e3e",
  },
  ButtonSignOutText: {
    color: 'white',
    fontWeight: 600,
    fontSize: 18,
  },

  ButtonRegisterCar: {
    height: 50,
    width: '100%',
    marginTop: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#e4e4e4",
    borderBottomColor: "#e4e4e4",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  ButtonRegisterCarText: {
    fontWeight: 500,
    fontSize: 18,
    color: '#228be6'
  },
  btnSignOutText: {
    color: '#e03131'
  }
});