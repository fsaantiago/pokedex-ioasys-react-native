import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import styles from '../styles/pokeStyles';

const CardDetail = ({ pokemon, onBackPress }) => {
  return (
    <View style={styles.cardDetailContainer}>
      <Image source={{ uri: pokemon.sprites['front_default'] }} style={styles.cardDetailImage} />
      <Text style={styles.cardDetailName}>{pokemon.name}</Text>
      <Text style={styles.cardDetailText}>Pokedex Number: #00{pokemon.id}</Text>
      <Text style={styles.cardDetailText}>Type: {pokemon.types.map(type => type.type.name).join(', ')}</Text>
      <Text style={styles.cardDetailText}>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
      <Text style={styles.cardDetailText}>Stats:</Text>
      {pokemon.stats.map(stat => (
        <Text key={stat.stat.name} style={styles.cardDetailText}>
          {stat.stat.name}: {stat.base_stat}
        </Text>
      ))}
    </View>
  );
};

export default CardDetail;