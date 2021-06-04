import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Movies";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();

export default () => {
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
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
