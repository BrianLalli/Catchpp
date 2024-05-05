import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function ProfileScreen({ navigation }) {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [location, setLocation] = useState('New York, USA');
  const [selectedSport, setSelectedSport] = useState('Baseball');  // Default or loaded from user profile

  const saveProfile = () => {
    // Logic to save the profile data
    console.log("Profile saved:", { name, email, location, selectedSport });
    // Potentially navigate back or show a success message
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={saveProfile}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {/* implement logout or other functionality */}}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.profilePic}
      />
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLocation}
        value={location}
        placeholder="Location"
      />
      <Text style={styles.label}>Select Your Favorite Sport:</Text>
      <Picker
        selectedValue={selectedSport}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedSport(itemValue)}
      >
        <Picker.Item label="Baseball" value="Baseball" />
        <Picker.Item label="Basketball" value="Basketball" />
        <Picker.Item label="Football" value="Football" />
        <Picker.Item label="Soccer" value="Soccer" />
        <Picker.Item label="Tennis" value="Tennis" />
        <Picker.Item label="Pickleball" value="Pickleball" />
        <Picker.Item label="Golf" value="Golf" />
      </Picker>

    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,

  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default ProfileScreen;
