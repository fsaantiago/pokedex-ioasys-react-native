import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles/pokeStyles'; // Importando os estilos do projeto 2
import CardPage from './components/CardPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeData: [], 
      pokeInfo: [],
      page: 0, 
      loadPages: 6,
      searchTerm: '', 
    };
  }

  componentDidMount() {
    this.pokemonPagination();
  }

  pokemonPagination() {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${this.state.page}&limit=${this.state.loadPages}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.setState({ pokeData: data.results }, () => {
            this.state.pokeData.map((pokemon) => {
              fetch(pokemon.url)
                .then((response) => response.json())
                .then((data) => {
                  if (data) {
                    var aux = this.state.pokeInfo;
                    aux.push(data);
                    this.setState({ pokeInfo: aux });
                  }
                })
                .catch(console.log);
            });
          });
        }
      })
      .catch(console.log);
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  };

  render() {
    const { pokeInfo, searchTerm } = this.state;

    const filteredPokemonList = pokeInfo.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pokemonListFromApi = filteredPokemonList.map((pokemon, index) => {
      return <CardPage pokemon={pokemon} key={index} />;
    });

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Pokemon"
          onChangeText={this.updateSearchTerm}
          value={this.state.searchTerm}
        />
        <View style={styles.grid}>{pokemonListFromApi}</View>
      </View>
    );
  }
}

export default App;
