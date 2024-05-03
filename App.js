import { View, ScrollView, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { Component } from 'react';
import styles from './styles/pokeStyles'
import CardPage from './components/CardPage';
import { PokeType } from './components/Poketype'; // Importando a função PokeType
import FilterPokemons from './components/filterPokemons'
import SearchBar from './components/SearchBar'
import ErrorPage from './components/ErrorPage' 
import LoadingPage from './components/LoadingPage' 
import CardDetail from './components/CardDetail';


class App extends Component {
  constructor() {
    //starta o estado inicial do componente
    super();
    this.state = {
      pokeData: [], //iniciando uma lista vazia de pokemons
      pokeInfo: [],
      page: 0, //variavel da pagina atual da lista
      loadPages: 9, // variavel da qtd de itens na pagina atual  
      scrollViewHeight: 0, // altura do ScrollView
      halfPageHeight: 0, // metade da altura da tela
      searchTerm : '',
      isLoading: true, //estado inicial pra tela de loading
      selectedItem: null, //sera usado na selecao de pokemons
    }
    this.loadMorePokemons = this.loadMorePokemons.bind(this); //variavel pra puxar mais pokemons ao clicar no botao de mais
  }

  // funcao para lidar com o clique em um pokemon
  clickOneItem = (pokemon) => {
    this.setState({ selectedItem: pokemon });
  };

  backInitialAfterSelect = () => {
    this.setState({ selectedItem: null });
  };

  // Função para obter uma nova página
  nextPage() {
    return this.state.page + this.state.loadPages;
  }

  //função que vai lidar com a integração da api dos pokemons
  componentDidMount() {
    // carrega tela de oaging por 3 segundos
    setTimeout(() => {
      this.setState({ isLoading: false });
      this.pokemonPagination();
      }, 3000);
  }

  pokemonPagination() {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.page + '&limit=' + this.state.loadPages;
    fetch(url).then(response => response.json()).then(data => {
        if (data) {
          this.setState({ pokeData: data.results }, () => {
            this.state.pokeData.map(pokemon => {
              fetch(pokemon.url).then(response => response.json()).then(data => {
                  if (data) {
                    var aux = this.state.pokeInfo;
                    aux.push(data);
                    this.setState({ pokeInfo: aux });
                  }
                }).catch(console.log);
            });
          });
        }
      }).catch(console.log);
  }

  // Função para carregar mais pokemons (load da tela)
  loadMorePokemons(event) {
    const newPage = this.nextPage();
    this.setState({ page: newPage }, () => {
      console.log("Page: " + this.state.page)
      this.pokemonPagination();
    });
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  };

  render() {
    const { pokeInfo, halfPageHeight, searchTerm, isLoading, selectedItem } = this.state;
    const filteredPokemonList = FilterPokemons(pokeInfo, searchTerm);

    if (isLoading) {return <LoadingPage />;}

    //resolver quando pokemon é selecionado
    if (selectedItem) {
      return (
        <View style={styles.container}>
          <CardDetail pokemon={selectedItem} />
          <Button title="Back" onPress={this.backInitialAfterSelect} />
        </View>
      );
    }

    // Tras ErrorPage a busca nao retornar nada
    if (filteredPokemonList.length === 0) {
      return <ErrorPage 
        searchTerm={searchTerm}
        updateSearchTerm={this.updateSearchTerm}
      />;
    }

    const searchBar = ( <SearchBar searchTerm={searchTerm} updateSearchTerm={this.updateSearchTerm}/>);

    //chama file que cria views dos cards dos pokemons
    const pokemonListFromApi = filteredPokemonList.map((pokemon, index) => { 
      return (<CardPage pokemon={pokemon} onPress={this.clickOneItem} /> );
    });

    return (
      <View style={styles.container}>
        {searchBar}

        <ScrollView style={styles.scrollView}
            //trecho usado pra fazer com que lista de pokemons cresça para baixo e nao para cima
            onContentSizeChange={(width, height) => this.setState({ scrollViewHeight: height })}
            onLayout={(event) => {const { height } = event.nativeEvent.layout;this.setState({ halfPageHeight: height / 3 });}}>
            
            <View style={{ minHeight: halfPageHeight }}></View>
            <View style={styles.grid}>{pokemonListFromApi}</View>

        </ScrollView>
        <View style={styles.bottomContent}>
          <TouchableOpacity onPress={this.loadMorePokemons}>
            <Image
              source={require('./assets/icons/godown-icon.png')} // Caminho para o ícone personalizado
              style={{ width: 24, height: 24, alignItems: 'center' }} // Tamanho do ícone
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App;
