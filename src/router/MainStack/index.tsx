import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainStackParamList } from "../../typings/routers";
import { HomeScreen } from "../../screens/HomeScreen";
import { CalenderView } from "../../screens/CalenderView";
import { RequestScreen } from "../../screens/RequestScreen";

const MainRouterNavigator = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <MainRouterNavigator.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainRouterNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <MainRouterNavigator.Screen
        name="RequestScreen"
        component={RequestScreen}
      />
      <MainRouterNavigator.Screen
        name="CalenderView"
        component={CalenderView}
      />
    </MainRouterNavigator.Navigator>
  );
};
