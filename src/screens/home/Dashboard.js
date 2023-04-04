import s from "../../styles/DashboardStyles";
import { Text, SafeAreaView, ScrollView } from "react-native";
import NavBar from "../../components/NavBar";

const Dashboard = () => {
  return (
    <SafeAreaView style={s.Dashboard}>
      <ScrollView>
        <Text style={s.DashboardTitle}>SmartMotor</Text>

      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default Dashboard;
