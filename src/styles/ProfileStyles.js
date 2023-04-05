import { StyleSheet } from "react-native";

const s = StyleSheet.create({
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
    borderRadius: 12,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
  },
  ButtonSignOutText: {
    color: 'white',
    fontWeight: 600,
    fontSize: 18,
  },

  ButtonRegisterCar: {
    height: 48,
    width: '80%',
    borderRadius: 12,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#228be6'
  },
  ButtonRegisterCarText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 16
  },
});

export default s;
