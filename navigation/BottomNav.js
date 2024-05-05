import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Logout") {
            iconName = focused ? "log-out" : "log-out-outline"; // Using log-out icons
          }

          // Return the Icon component from Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Logout"
        component={ProfileScreen} // Placeholder component, or you could have a dedicated screen for confirmation.
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // Prevent the default action of navigating
            // Insert your logout logic here, such as clearing user data or navigating to a login screen
            console.log("Logging out...");
            navigation.replace("Login"); // Redirect to login or another appropriate screen
          },
        })}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "log-out" : "log-out-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
