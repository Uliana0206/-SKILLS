import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";

import Login from "./screens/LoginScreen"
import Registration from "./screens/Registration"
import Home from "./screens/HomeScreen"
import Hi from "./screens/HiScreen";
import ListingScreen from "./screens/ListingScreen";
import New from "./screens/New";
import FullInfo from "./screens/FullInfo";

const Stack = createStackNavigator();90

function App(){
  const [initializing, setInitializing ] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber
  }, []);

  if (initializing) return null;

  if (!user){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Hi"
          component={Hi}
          options={{ title: ' '}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: ' '}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: ' '}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: ' '}}
      />
      <Stack.Screen
             name='ListingScreen'
             component={ListingScreen}
             options={{title: ' '}}
      />
      <Stack.Screen
             name='New'
             component={New}
             options={{title: ' '}}
      />
      <Stack.Screen
             name='FullInfo'
             component={FullInfo}
             options={{title: ' '}}
      />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}