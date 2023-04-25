import s from "../../styles/st-dashboard";
import dashBoardData from '../../data/DashboardItems';
import NavBar from "../../components/NavBar";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = () => {
  return (
    <SafeAreaView style={s.Dashboard}>
      <ScrollView>
        <Text style={s.DashboardTitle}>Sigma</Text>
        <View style={s.DashboardItems}>
          {dashBoardData.map(i => {
            return (
              <View style={s.DashboardItemContainer}>
                <LinearGradient colors={['#1c7ed6', '#339af0']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={s.DashboardItem}>
                  <Text style={s.DashboardItemTextTitle}>{i.name}</Text>
                  <Text style={s.DashboardItemTextDate}>{i.date}</Text>
                  <Text style={s.DashboardItemTextCounter}>Días restantes para el pago: {i.remainingDays}</Text>
                </LinearGradient>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default Dashboard;
