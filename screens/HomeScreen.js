import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function HomeScreen({ navigation }) {
  // Function to handle press on a sport card
  const handlePress = (sport) => {
    // Here you could navigate to a specific screen based on the sport
    console.log(`Navigating to details for ${sport}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Your Sport</Text>
      <TouchableOpacity style={styles.card} onPress={() => handlePress('Baseball')}>
        <Image source={require('../assets/images/baseball.png')} style={styles.image} />
        <Text style={styles.cardText}>Baseball</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => handlePress('Football')}>
        <Image source={require('../assets/images/football.jpg')} style={styles.image} />
        <Text style={styles.cardText}>Football</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => handlePress('Lacrosse')}>
        <Image source={require('../assets/images/lacrosse.png')} style={styles.image} />
        <Text style={styles.cardText}>Lacrosse</Text>
      </TouchableOpacity>
      {/* Repeat TouchableOpacity block for other sports as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  }
});

export default HomeScreen;
