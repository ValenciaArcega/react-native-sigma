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
  DashboardItem: {
    height: '100%',
    width: '100%',
    paddingLeft: 16,
    borderRadius: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  DashboardItemTextTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: '#fff',
  },
  DashboardItemTextDate: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: 500,
    color: '#121212',
  },
  DashboardItemTextCounter: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 400,
    color: '#fff',
  },
});

export default s;
