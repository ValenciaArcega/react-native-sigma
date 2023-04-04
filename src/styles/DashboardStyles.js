import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  Dashboard: {
    flex: 1,
  },
  DashboardTitle: {
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: -0.6,
  },
  DashboardItems: {},
  DashboardItem: {
    width: '90%',
    height: 128,
    alignSelf: 'center',
    marginTop: 24,
    borderRadius: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
    shadowOpacity: 0.8,
  },
  DashboardItemContainer: {
    shadowColor: 'black',
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  DashboardItemTextTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: '#fff',
  },
  DashboardItemTextDate: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: 500,
    color: '#fff',
  },
  DashboardItemTextCounter: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 400,
    color: '#fff',
  },
});

export default s;
