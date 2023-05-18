import s from "../styles/st-dashboard";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavBar } from "./NavBar";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

Icon.loadFont();

export function Dashboard() {
  const navigation = useNavigation();
  const btnsDiscover = [
    {
      icon: 'car-wrench',
      title: 'Talleres',
      fn() { navigation.replace('Garage'); }
    },
    {
      icon: 'database-edit-outline',
      title: 'Mis datos',
      fn() { navigation.replace('Profile'); }
    },
    {
      icon: 'map-search-outline',
      title: 'Buscar',
      fn() { navigation.replace('Garage'); },
    },
  ];

  return (
    <SafeAreaView style={s.safeArea__dashboard}>
      <ScrollView>
        <Text style={s.dashboard__title}>Hola de nuevo</Text>
        <View>

          <View style={s.containerDiscover}>
            <Text style={s.discover__title}>Panel de control</Text>

            <View style={s.discover__gridBtn}>
              {
                btnsDiscover.map((item, i) =>
                  <View key={i} style={s.wrapperBtn}>
                    <TouchableOpacity onPress={item.fn} style={s.discover__btn}>
                      <Icon name={item.icon} size={30} color="#1c7ed6" />
                    </TouchableOpacity>
                    <Text style={s.wrapperBtnText}>{item.title}</Text>
                  </View>)
              }
            </View>
          </View>
        </View>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};
