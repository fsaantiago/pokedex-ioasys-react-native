import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles/pokeStyles'; // Certifique-se de importar seus estilos corretamente

const SearchBar = ({ updateSearchTerm, searchTerm }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Buscar pokemon"
        onChangeText={updateSearchTerm}
        value={searchTerm}
      />
    </View>
  );
};

export default SearchBar;