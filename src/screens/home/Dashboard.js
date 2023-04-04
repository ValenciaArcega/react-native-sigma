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
                <View style={s.DashboardItemContainer}>
                  <LinearGradient colors={['#1c7ed6', '#4dabf7']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={s.DashboardItem}>
                    <Text style={s.DashboardItemTextTitle}>{el.name}</Text>
                    <Text style={s.DashboardItemTextDate}>{el.date}</Text>
                    <Text style={s.DashboardItemTextCounter}>Días restantes para el pago: {el.remainingDays}</Text>
                  </LinearGradient>
                </View>
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
