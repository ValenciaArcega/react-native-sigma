import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  ButtonBackProfile: {
    width: '30%',
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Form: {
    paddingBottom: 64
  },
  FormTitle: {
    marginTop: 24,
    marginLeft: 16,
    fontSize: 34,
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
  ButtonRegisterCar: {
    height: 52,
    width: '90%',
    marginTop: 20,
    borderRadius: 12,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c7ed6',
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      height: 6,
      width: 0
    }

  },
  ButtonRegisterCarText: {
    color: '#fff',
    fontSize: 18
  }
});

export default s;
