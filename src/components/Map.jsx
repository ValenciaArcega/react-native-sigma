import MapView, { Marker } from 'react-native-maps';
import { s } from '../styles/st-garage';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";

Icon.loadFont();

export function Map({ route }) {
  const navigation = useNavigation();
  const data = route.params;

  function goBack() { navigation.replace('Garage'); }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={s.garage__title}>{data.name}</Text>


        <Text style={s.garage__features}>
          <Text style={s.colorBlue}>◉ </Text>
          {data.features[0]}
        </Text>
        <Text style={s.garage__features}>
          <Text style={s.colorBlue}>◉ </Text>
          {data.features[1]}
        </Text>
        <Text style={s.garage__features}>
          <Text style={s.colorBlue}>◉ </Text>
          {data.features[2]}
        </Text>
        <Text style={s.garage__features}>
          <Text style={s.colorBlue}>◉ </Text>
          {data.features[3]}
        </Text>
        <Text style={s.garage__features}>
          <Text style={s.colorBlue}>◉ </Text>
          {data.features[4]}
        </Text>

        <Text style={s.garage__price}>Precio por diagnostico: <Text style={[s.colorBlue, s.garage__price]}>{data.price}</Text></Text>

        <MapView
          style={s.map}
          // showsUserLocation={true}
          //  followsUserLocation={true}
          // showsMyLocationButton={true}
          mapType="standard"
          userInterfaceStyle="dark" // apple maps
          showsPointsOfInterest={true}
          initialRegion={{
            latitude: data.latitude,
            longitude: data.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
          <Marker
            draggable
            pinColor='00000ff'
            coordinate={{
              latitude: data.latitude,
              longitude: data.longitude,
            }} />
        </MapView>

        <TouchableOpacity onPress={goBack} style={s.btnBackGarage}>
          <Icon name="chevron-left" size={24} color="#000" />
          <Text style={{ fontSize: 18 }}>Regresar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}