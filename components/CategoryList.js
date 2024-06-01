/*import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const categories = [
  { id: '1', title: 'Exercise', tasks: 12, image: 'https://path-to-exercise-image.png' },
  { id: '2', title: 'Study', tasks: 12, image: 'https://path-to-study-image.png' },
  { id: '3', title: 'Study', tasks: 12, image: 'https://path-to-study-image.png' },
  
];

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryContainer}>
           
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Text style={styles.categoryTasks}>{item.tasks} Tasks</Text>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginRight: 15,
    width:'75%'
  },
  categoryImage: {
    width: 100,
    height: 100,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#777',
  },
});

export default CategoryList;

*/
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CardItem from './CardItem';

const data = [
  { id: '1', title: '1.1 Living Things', description: 'Science. Class 3' },
  { id: '2', title: '1.1 Living Things', description: 'Science. Class 3' },
  { id: '3', title: '1.1 Living Things', description: 'Science. Class 3' },
  { id: '4', title: '1.1 Living Things', description: 'Science. Class 3' },
  { id: '5', title: '1.1 Living Things', description: 'Science. Class 3' },
  { id: '6', title: '1.1 Living Things', description: 'Science. Class 3' },
];

const HorizontalCardList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardItem title={item.title} description={item.description} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
});

export default HorizontalCardList;