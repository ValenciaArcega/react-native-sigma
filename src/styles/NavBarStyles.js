import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  NavBar: {
    flexDirection: "row",
    width: "100%",
    position: "fixed",
    left: 0,
    bottom: 0,
    height: 44,
    borderTopColor: 'gray',
    backgroundColor: "white"
  },
  NavBarButton: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  NavBarButtonText: {},
});

export default s;
