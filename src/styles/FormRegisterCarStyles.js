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
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: -1,
  },
  ContainerInput: {
    width: '90%',
    marginTop: 16,
    // backgroundColor: 'red',
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
  }
});

export default s;
