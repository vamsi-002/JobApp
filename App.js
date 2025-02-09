import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import JobsScreen from "./screens/JobsScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jobs" component={JobsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
