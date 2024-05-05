import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

// Static mapping of sports to image modules
const sportImages = {
  lacrosse: require('../assets/images/lacrosse.png'),
  football: require('../assets/images/football.jpg'),
  baseball: require('../assets//images/baseball.png'),
  // Add more sports as needed
};

function SportDetailScreen({ navigation, route }) {
  const { sport } = route.params;
  const sportImage = sportImages[sport.toLowerCase()]; // Access the image using the sport key

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sport}</Text>
      <Image source={sportImage} style={styles.image} />
      <Text style={styles.description}>
        Join a game of {sport} or start your own session and invite friends or locals to play.
      </Text>
      <Button
        title="View Available Sessions"
        onPress={() => navigation.navigate('SessionList', { sport })}
      />
      <Button
        title="Create New Session"
        onPress={() => navigation.navigate('SessionDetail', { sport, new: true })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  }
});

export default SportDetailScreen;
