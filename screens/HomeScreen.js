import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function HomeScreen({ navigation }) {
  // Log the navigation prop to see if it contains the expected routes
  console.log(navigation);

  const handlePress = (sport) => {
    // Navigate to the SportDetailScreen with the selected sport
    navigation.navigate('SportDetail', { sport });
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Match the background color of the container
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
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
