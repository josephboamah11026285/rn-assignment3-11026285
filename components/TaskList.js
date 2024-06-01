import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const tasks = [
  { id: '1', task: 'Mobile App Development' },
  { id: '2', task: 'Web Development' },
  { id: '3', task: 'Push Ups' },
  { id: '4', task: 'Mobile App Development' },
  { id: '5', task: 'Web Development' },
  { id: '6', task: 'Push Ups' },
  { id: '7', task: 'Mobile App Development' },
  { id: '8', task: 'Web Development' },
  { id: '9', task: 'Push Ups' },
  { id: '10', task: 'Mobile App Development' },
  { id: '11', task: 'Web Development' },
  { id: '12', task: 'Push Ups' },
  { id: '13', task: 'Mobile App Development' },
  { id: '14', task: 'Web Development' },
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
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#E8D1BA',
    
    
  },
  taskText: {
    fontSize: 18,
  },
});

export default TaskList;

