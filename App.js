// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './navigation/BottomNav';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNav />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
