import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mockSessions = [
  { id: '1', title: 'Evening Baseball Game', time: '7:00 PM' },
  { id: '2', title: 'Weekend Baseball Match', time: '10:00 AM' }
  // Add more mock data or fetch from a server
];

function SessionListScreen({ navigation, route }) {
  const { sport } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available {sport} Sessions</Text>
      <FlatList
        data={mockSessions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('SessionDetail', { sessionId: item.id })}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default SessionListScreen;
