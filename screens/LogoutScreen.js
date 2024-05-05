import React from 'react';
import { View, Text, Button } from 'react-native';

function LogoutScreen({ navigation }) {
  const handleLogout = () => {
    // Perform logout operations here
    console.log('User logged out');
    // After logout, navigate to the login screen or reset the navigation stack
    navigation.replace('Login');  // Make sure you have a 'Login' screen defined or change as appropriate
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Are you sure you want to logout?</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

export default LogoutScreen;
