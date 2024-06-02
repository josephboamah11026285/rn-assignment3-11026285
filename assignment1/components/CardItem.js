import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CardItem = ({ title, description, imagelink }) => {
  return (
    <View style={styles.card}>
     
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
       
      </View>
      <Image source={imagelink} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10, 
    borderColor:'#E8D1BA',
    overflow: 'hidden',
    height: 230,
  },
  image: {
    width: '100%',
    height: 100,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: '#9E9E9E',
  },
  readMore: {
    color: '#B08D57',
    marginTop: 5,
  },
});

export default CardItem;