 import React from 'react';

const filterPokemons = (pokeInfo, searchTerm) => {
  return pokeInfo.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default filterPokemons;