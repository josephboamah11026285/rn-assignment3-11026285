import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const tasks = [
  { id: '1', task: 'Mobile App Development' },
  { id: '2', task: 'Web Development' },
  { id: '3', task: 'Blogging' },
  { id: '4', task: 'Learning a new language' },
  { id: '5', task: 'Gardening' },
  { id: '6', task: 'Writing a book' },
  { id: '7', task: 'Painting or drawing' },
  { id: '8', task: 'Learning to play a musical instrument' },
  { id: '9', task: 'Building a personal brand' },
  { id: '10', task: 'Volunteering for a cause' },
  { id: '11', task: 'Starting a side business' },
  { id: '12', task: 'Practicing mindfulness or meditation' },
  { id: '13', task: 'Learning photography' },
  { id: '14', task: 'Cooking new recipes regularly' },
  { id: '15', task: 'Push Ups' },


];

const TaskList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.task}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    
  },
  taskContainer: {
    display: 'flex',
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    height: 100,
    justifyContent:'center',
    borderColor:'#E8D1BA',
    
    
  },
  taskText: {
    fontSize: 18,
  },
});

export default TaskList;

