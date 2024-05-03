import React from 'react';
import { View, Image, StyleSheet, Text, TextInput} from 'react-native';
import styles from '../styles/pokeStyles'

const ErrorPage = ({ searchTerm, updateSearchTerm }) => {
  return (
    <View style={styles.container}>
     <TextInput style={styles.searchContainer}
        placeholder="Search again"
        onChangeText={updateSearchTerm}
        value={searchTerm}
      />
      <Image
        source={require('../assets/images/page/errorPage.jpg')}
        style={styles.errorImage}
      />
      <Text style={styles.errorText}>Pokemon not found, try again!</Text>
    </View>
  );
};

export default ErrorPage;