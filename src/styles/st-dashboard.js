import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  safeArea__dashboard: {
    flex: 1,
  },
  dashboard__title: {
    width: '90%',
    marginTop: 32,
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: -0.8,
    alignSelf: 'center',
  },
  containerDiscover: {
    height: 164,
    width: '92%',
    marginTop: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d7d7d7',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  discover__title: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 500,
    alignSelf: 'center',
  },
  discover__gridBtn: {
    marginTop: 24,
    flexDirection: 'row',
    gap: 42,
    justifyContent: 'center',
  },
  wrapperBtn: {
    alignItems: 'center',
    gap: 4,
  },
  wrapperBtnText: {
    fontWeight: 400,
    letterSpacing: -.2,
    textAlign: 'center',
  },
  discover__btn: {
    height: 54,
    width: 54,
    padding: 6,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d7d7d7',
  },

});

export default s;
