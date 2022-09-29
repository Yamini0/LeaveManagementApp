import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { BaseContext } from "./src/Context";

import { CalenderView } from "./src/screens/CalenderView";
import { MainStack } from "./src/router/MainStack";

const App = () => {
  return (
    <BaseContext>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </BaseContext>
  );
};

export default App;
