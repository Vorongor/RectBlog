import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import PostScreen from "../screens/PostsScreen";
import NewPostScreen from "../screens/NewPostScreen";
import UserScreen from "../screens/UserScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Posts"
          component={PostScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewPosts"
          component={NewPostScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
