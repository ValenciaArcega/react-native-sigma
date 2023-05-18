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
    height: 132,
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
  cardGarage__btn: {
    height: 44,
    width: '100%',
    marginTop: 8,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c7ed6',
  },
  cardGarage__btnText: {
    fontSize: 18,
    color: '#fff'
  },

  // map component  
  garage__title: {
    width: '90%',
    marginTop: 72,
    marginBottom: 12,
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: -.4,
  },
  garage__features: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 4,
    fontSize: 18,
  },
  garage__price: {
    width: '90%',
    marginTop: 12,
    alignSelf: 'center',
    fontSize: 18,
  },
  map: {
    height: '40%',
    width: '95%',
    marginTop: 24,
    borderRadius: 10,
    alignSelf: 'center',
  },
  btnBackGarage: {
    height: 42,
    width: '40%',
    position: 'absolute',
    top: 10,
    left: 10,
    gap: 6,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 0
    }
  },
  // other tools
  colorBlue: {
    fontWeight: 700,
    color: '#1c7ed6',
  }
});
