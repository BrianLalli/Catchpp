import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeStackNavigator, ProfileStackNavigator } from "./AppNavigator"; // Updated import path

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Logout") {
            iconName = focused ? "log-out" : "log-out-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      <Tab.Screen
        name="Logout"
        component={() => null}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            console.log("Logging out...");
            navigation.navigate("Login");
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
