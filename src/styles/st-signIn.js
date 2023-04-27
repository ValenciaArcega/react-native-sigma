import { StyleSheet } from "react-native";
import { colors } from "./colors";

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.mainColor
  },
  //////////////////////////////////////////
  login: {
    width: "90%",
    marginTop: 12,
    paddingBottom: 2,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#fff"
  },
  loginScrollView: {
    width: "100%",
    height: "90%",
  },
  LoginImage: {
    alignSelf: "center",
    height: 140,
    width: 140,
  },
  LoginTitle: {
    alignSelf: "center",
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: -0.7
  },
  ////////////////////////////////////////////
  LoginContainerInput: {
    alignSelf: "center",
    width: "82%",
  },
  // text above inputs
  LoginInputHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 500
  },
  LoginInput: {
    height: 44,
    width: "100%",
    marginTop: 3,
    paddingLeft: 12,
    fontSize: 16,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    borderBottomColor: '#4998de',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomWidth: 2.2,
  },
  /////////////////////////////////////////////
  btnSignIn: {
    height: 48,
    width: "82%",
    marginTop: 20,
    borderRadius: 8,
    // alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#1c7ed6"
  },
  btnSignInText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    fontWeight: 500
  },

  TextBetweenButtons: {
    alignSelf: 'center',
    marginTop: 16
  },

  labelGoSignUp: {
    marginTop: 4,
    color: "#339af0"
  },

});

export default s;
