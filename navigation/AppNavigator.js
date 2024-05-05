import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import HomeScreen from '../screens/HomeScreen';
import SportDetailScreen from '../screens/SportDetailScreen';
import SessionListScreen from '../screens/SessionListScreen';
import SessionDetailScreen from '../screens/SessionDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/LogoutScreen';

// Define Stack Navigators
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Play Catch' }} />
      <HomeStack.Screen name="SportDetail" component={SportDetailScreen} options={({ route }) => ({ title: route.params.sport })} />
      <HomeStack.Screen name="SessionList" component={SessionListScreen} options={({ route }) => ({ title: `Available ${route.params.sport} Sessions` })} />
      <HomeStack.Screen name="SessionDetail" component={SessionDetailScreen} options={({ route }) => ({ title: route.params.new ? 'Create Session' : 'Session Details' })} />
    </HomeStack.Navigator>
  );
}

export function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <ProfileStack.Screen name="Logout" component={LogoutScreen} options={{ title: 'Logout', headerShown: false }} />
    </ProfileStack.Navigator>
  );
}
