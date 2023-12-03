import React from "react";
import { StyleSheet, View, Text } from "react-native"; // Import Text from 'react-native'
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import Shirts from "./components/Pages/ShirtsPage";
import { createStackNavigator } from "@react-navigation/stack";
import ProductView from "./components/Pages/ProductView";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <NavigationBar />
      <SearchBar />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shirts" component={Shirts} />
        <Stack.Screen name="View" component={ProductView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
