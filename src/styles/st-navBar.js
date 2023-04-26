import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  NavBar: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    height: 50,
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
  NavBarButtonSearch: {
    flex: 1,
    marginTop: -25,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#1c7ed6',
    shadowColor: 'black',
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },
  NavBarButtonSearchText: {
    color: '#fff',
  }
});

export default s;
