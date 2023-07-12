import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
/* eslint-disable react/react-in-jsx-scope */

import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoListScreen from "./src/screens/MemoListScreen";
import MemoListDetailScreen from "./src/screens/MemoDetailScreen";

import { firebaseConfig } from "./env";

const Stack = createStackNavigator();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#467FD3" },
          headerTitleStyle: { color: "#FFFFFF" },
          headerTitle: "Memo App",
          headerTintColor: "#ffffff",
          headerBackTitle: "Back",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoListDetail" component={MemoListDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
