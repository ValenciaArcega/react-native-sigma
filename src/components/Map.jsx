import MapView, { Marker } from 'react-native-maps';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";

export function Map({ route }) {
  Icon.loadFont();
  const navigation = useNavigation();
  const coor = route.params;

  function goBack() { navigation.replace('Garage'); }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{
          width: '90%',
          marginTop: 64,
          alignSelf: 'center',
          fontSize: 24,
          fontWeight: 800,
          letterSpacing: -.4,
        }}>{coor.name}</Text>
        <MapView
          style={{
            borderRadius: 10,
            height: '40%',
            width: '95%',
            alignSelf: 'center'
            // borderRadius: 10,
          }}
          // showsUserLocation={true}
          //  followsUserLocation={true}
          // showsMyLocationButton={true}
          mapType="standard"
          userInterfaceStyle="dark" // apple maps
          showsPointsOfInterest={true}
          initialRegion={{
            latitude: coor.latitude,
            longitude: coor.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            draggable
            pinColor='00000ff'
            coordinate={{
              latitude: coor.latitude,
              longitude: coor.longitude,
            }}
          />
        </MapView>

        <TouchableOpacity onPress={goBack} style={{
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
        }}>
          <Icon name="chevron-left" size={24} color="#000" />
          <Text style={{ fontSize: 18 }}>Regresar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}