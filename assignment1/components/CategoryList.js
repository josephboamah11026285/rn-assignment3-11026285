import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CardItem from './CardItem';
import exercise from '../assets/exercise.jpeg'
import study from '../assets/study.jpeg'
import code from '../assets/code.jpeg'
import cook from '../assets/cook.jpeg'
import socialize from '../assets/socialize.jpeg'
import relax from '../assets/relax.jpeg'
import work from '../assets/work.jpeg'
import learn from '../assets/learn.jpeg'

const data = [
  { id: '1', title: 'Exercise', description: '12 Tasks', imagelink: exercise},
  { id: '2', title: 'Study', description: '12 Tasks', imagelink: study},
  { id: '3', title: 'Code', description: '12 Tasks', imagelink: code},
  { id: '4', title: 'Cook', description: '12 Tasks', imagelink: cook},
  { id: '5', title: 'Socialize', description: '12 Tasks', imagelink: socialize},
  { id: '6', title: 'Relax', description: '12 Tasks', imagelink: relax},
  { id: '7', title: 'Work', description: '12 Tasks', imagelink: work},
  { id: '8', title: 'Learn', description: '12 Tasks', imagelink: learn},
];

const HorizontalCardList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardItem title={item.title} description={item.description} imagelink={item.imagelink} />}
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