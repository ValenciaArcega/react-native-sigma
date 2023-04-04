import s from "../../styles/DashboardStyles";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import NavBar from "../../components/NavBar";
import dashBoardData from '../../data/DashboardItems';
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = () => {
  return (
    <SafeAreaView style={s.Dashboard}>
      <ScrollView>
        <Text style={s.DashboardTitle}>SmartMotor</Text>
        <View style={s.DashboardItems}>
          {
            dashBoardData.map(el => {
              return (
                <LinearGradient colors={['#1c7ed6', '#4dabf7']}
                  start={{
                    x: 0,
                    y: 1
                  }}
                  end={{
                    x: 1,
                    y: 0
                  }}
                  style={{ width: '90%', height: 128, alignSelf: 'center', marginTop: 16, borderRadius: 12 }}>
                  <Text>{el.name}</Text>
                  <Text>{el.date}</Text>
                  <Text>{el.remainingDays}</Text>
                </LinearGradient>
              );
            })
          }
        </View>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default Dashboard;
