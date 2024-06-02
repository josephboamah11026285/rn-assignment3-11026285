import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TaskList from './components/TaskList';
import placeholder from './assets/placeholder.png'
import HorizontalCardList from './components/CategoryList';

export default function App() {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Hello, Devs</Text>
      <Image source={placeholder} style={{width: 40, height: 40, borderRadius:99, margin:10}}/>
    </View>
    <Text style={styles.subHeader}>14 tasks today</Text>
    <View style ={{ display:'flex', flexDirection: 'row', alignItems: "baseline", gap: 15}}>
    <View style={styles.searchContainer}>
      <FontAwesome name="search" size={20} color="black" />
      <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
    <TouchableOpacity>
        <FontAwesome name="sliders" size={26} color="white" style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
    <Text style={styles.sectionHeader}>Categories</Text>
    <HorizontalCardList />
    <Text style={styles.sectionHeader}>Ongoing Task</Text>
    <TaskList />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F0E8',
  },
  headerContainer: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    padding: 2,
    alignItems: 'center',
    marginTop: 20
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
    color: '#777',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width:'85%',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    
  },
  filterIcon: {
    backgroundColor: '#F76C6A',
    padding: 5,
    borderRadius: 5,
    width: 35,
    height: 35,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});