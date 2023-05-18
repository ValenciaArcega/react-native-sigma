import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  NavBar: {
    height: 54,
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    left: 0,
    bottom: 0,
    borderTopColor: '#e8e8e8',
    borderTopWidth: 2,
    backgroundColor: "white"
  },
  NavBarButton: {
    flex: 1.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NavBarButtonText: {},
});

export default s;
