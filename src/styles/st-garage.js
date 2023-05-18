import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  title: {
    width: '90%',
    marginTop: 44,
    fontSize: 36,
    fontWeight: 800,
    letterSpacing: -.5,
    alignSelf: 'center',
  },
  textSection: {
    width: '90%',
    marginTop: 24,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 500
  },
  finder: {
    height: 44,
    width: '90%',
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: '#a1a1a9'
  },
  finderInput: {
    width: '85%',
    height: '100%',
    paddingLeft: 4,
    fontSize: 18,
    fontWeight: '500',
  },
  cardGarage: {
    height: 232,
    width: '90%',
    marginTop: 10,
    padding: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c8c8c8',
    alignSelf: 'center',
    backgroundColor: '#fff'
  },
  cardGarage__title: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: -.6,
  },
  cardGarage__features: {
    marginTop: 2,
    fontSize: 16,
  },
  cardGarage__price: {
    fontSize: 20,
    fontWeight: 500,
  },
  cardGarage__btn: {
    height: 48,
    width: '100%',
    marginTop: 18,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c7ed6',
  },
  cardGarage__btnText: {
    fontSize: 16,
    color: '#fff'
  },
  // other tools
  colorBlue: {
    color: '#1c7ed6',
  }
});
