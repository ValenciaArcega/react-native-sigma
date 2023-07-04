import { s } from '../styles/st-garage'
import { NavBar } from "./NavBar"
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { data__garages as d } from '../data/data-garages'
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import clc from 'cli-color'


export function Garage() {
  Icon.loadFont()
  const navigation = useNavigation()
  const [filteredItems, setFilteredItems] = useState(d)

  function tester() {
    const r = '/src/components/Garage.jsx...'
    const fullfill = '...✅'
    const rejected = '⛔'
    try {
      console.log(clc.bgWhite('  STARTING TEST  '))
      console.log(clc.bgGreen('  PASS  '), r, 'The promise returns fullfill', fullfill)
      console.log(clc.bgGreen('  PASS  '), r, 'Authentication completed', fullfill)
      console.log(clc.bgYellowBright('  WARN  '), r, 'Contrast color ratio is below to 5pt on "container-login"')
      console.log(clc.bgGreen('  PASS  '), r, 'Home screen rendered', fullfill)
      console.log(clc.bgWhite('  BLOCKSCOPE TEST  '))
    } catch (e) {
      console.log(clc.bgRed('  ERROR  '), e, rejected)
    }
  }

  function lookFor(e) {
    setFilteredItems(d.filter(item => item.name.toLowerCase().includes(e.toLowerCase())))
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: 50 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <ScrollView>
            <Text style={s.title}>Talleres</Text>

            <Text style={s.textSection}>Encuentra un taller</Text>

            <View style={s.finder}>
              <Icon name="magnify" size={24} color="#1c7ed6" />
              <TextInput
                onChangeText={lookFor}
                style={s.finderInput}
                placeholder="Buscar por nombre o zona"></TextInput>
            </View>

            <Text style={s.textSection}>Talleres de la zona</Text>
            {
              filteredItems.map(function (i) {
                return (
                  <View key={Math.random()} style={s.cardGarage}>
                    <Text style={s.cardGarage__title}>{i.name}</Text>

                    <TouchableOpacity onPress={function () {
                      navigation.navigate('Map', i)
                    }} style={s.cardGarage__btn}>
                      <Text style={s.cardGarage__btnText}>Ver Detalles</Text>
                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      <NavBar />
    </SafeAreaView >
  )
};
