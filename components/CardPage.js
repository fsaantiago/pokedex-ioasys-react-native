import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PokeType } from './Poketype'; // Importando a função PokeType
import styles from '../styles/pokeStyles';

const CardPage = ({pokemon, onPress}) => {
  // Obtendo o tipo do pokemon
  const pokemonType = pokemon.types[0].type.name;

  // Encontrando a cor correspondente ao tipo
  const color = PokeType().find(type => type.type === pokemonType).color;
  const colors = PokeType(pokemonType);
  const typeColor = colors.length > 0 ? colors[0].color : 'black'; // Pega a cor do primeiro tipo do Pokémon

  return (
    <TouchableOpacity onPress={() => onPress(pokemon)}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.cardText}>#{pokemon.id}</Text>
          <Image source={{ uri: pokemon.sprites['front_default'] }} style={styles.cardImage} />
        </View>
        <View style={styles.cardFooter, { backgroundColor: typeColor }}>
          <Text style={styles.cardFooterText}>{pokemon.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default CardPage;
