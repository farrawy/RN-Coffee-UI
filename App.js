import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import coffees from "./app/config/coffees";
import colors from "./app/config/colors";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import HomeScreen from "./app/screens/HomeScreen";
import AppNavigator from "./navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});
