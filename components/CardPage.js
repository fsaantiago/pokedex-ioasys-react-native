import React from 'react';
import styles from '../styles/pokeStyles';
import {cardStyle} from '../styles/cardStyle';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CardPage = ({ pokemon, onPress }) => {
  //Pega infos especificas dos pokemons pra ser usado na selecao de cor
  const { id, name, types, sprites } = pokemon;
  const pokemonType = types.length > 0 ? types[0].type.name.toLowerCase() : '';
  const getTypeColor = (pokemonType) => {
    const colors = cardStyle(); // Obtemos todas as cores
    const colorObject = colors.find((color) => color.type === pokemonType); // Procuramos a cor correspondente ao tipo de Pokémon
    return colorObject ? colorObject.color : '#000'; // Se a cor for encontrada, retornamos a cor; caso contrário, retornamos preto
  };

  const typeColor = getTypeColor(pokemonType);

  return (
    //cria views com styles para mostrar cada card
    <TouchableOpacity onPress={() => onPress(pokemon)}>
      <View style={[styles.card, { borderColor: typeColor }]}>
        <View style={styles.cardBody}>
          <Text style={[styles.cardText, { borderColor: typeColor }]}>
            #00{pokemon.id}
          </Text>
          <Image
            source={{ uri: pokemon.sprites['front_default'] }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.cardFooter, { backgroundColor: typeColor }]}>
          <Text style={styles.cardFooterText}>{pokemon.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardPage;
