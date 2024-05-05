import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function SessionDetailScreen({ navigation, route }) {
  const { sessionId, new: isNew } = route.params;
  
  const sessionDetails = isNew ? { title: 'Create a New Session', time: 'Choose Time' } : { title: 'Evening Baseball Game', time: '7:00 PM' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sessionDetails.title}</Text>
      <Text>{sessionDetails.time}</Text>
      <Button title="Join Session" onPress={() => alert('Session joined!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default SessionDetailScreen;
