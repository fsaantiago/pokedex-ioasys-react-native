import React from 'react';

import { View, Text, Image } from 'react-native'; // Removi StyleSheet, pois os estilos já estão importados do arquivo PokeStyles

import styles from "../styles/pokeStyles";



const CardPage = ({pokemon}) => {
    return (
      //cria views com styles para mostrar cada card
      <View style={styles.card}>
            <View style={styles.cardBody}>
              <Text style={styles.cardText}>#{pokemon.id}</Text>
              <Image source={{ uri: pokemon.sprites['front_default'] }} style={styles.cardImage} />
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>{pokemon.name}</Text>
            </View>
          </View>
    )
};

export default CardPage;
