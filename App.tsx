import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

// Components
import HomeScreen from "./screens/HomeScreen";
import { Provider as PaperProvider } from "react-native-paper";

// Datas and Functions
import { RootDrawerParamList } from "./data/dataTypes";
import SideDrawer from "./components/shared/SideDrawer";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <SideDrawer drawerProps={props} />}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
