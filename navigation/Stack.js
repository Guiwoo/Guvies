import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Movies";
import Detail from "../screens/Detail";
import Tab from "./Tabs";
import * as SplashScreen from "expo-splash-screen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

export default (route) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
