import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={styles.icon}>
          <Icon name="search" size={20} color='#FFFFFF'/>
        </View>




      </View>
      <Text style={styles.text}>This is the Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  search: {
    fontSize: 11,
    margin: 10,
    marginTop: 10,
    color: '#FFFF',

  }
});