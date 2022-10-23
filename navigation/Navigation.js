import { View, Text } from "react-native";
import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "../app/screens/HomeScreen";
import CoffeeDetailsScreen from "../app/screens/CoffeeDetailsScreen";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={CoffeeDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
