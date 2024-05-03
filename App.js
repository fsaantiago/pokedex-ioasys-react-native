import React from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Component } from 'react';
import styles from './styles/pokeStyles'
import CardPage from './components/CardPage';
import FilterPokemons from './components/filterPokemons'
import SearchBar from './components/SearchBar'
import ErrorPage from './components/ErrorPage' 
import LoadingPage from './components/LoadingPage' 
import CardDetail from './components/CardDetail';

//inicio da tela
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

  //funcao pra pegar uma nova pagina
  nextPage() {
    return this.state.page + this.state.loadPages;
  }

  //funcao para fazer o fetch da API
  fechAPI() {
      const { page, loadPages } = this.state;
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${loadPages}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data) {
            const updatedPokeInfo = [];
            const requests = data.results.map(pokemon => {
              return fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                  if (pokemonData) {
                    updatedPokeInfo.push(pokemonData);
                  }
                });
            });

            Promise.all(requests).then(() => {
              this.setState({ pokeInfo: updatedPokeInfo });
            });
          }
        })
        .catch(error => console.error('Error fetching Pokemon list:', error));
}

  //função que vai lidar com a integração da api dos pokemons
  componentDidMount() {
    // carrega tela de oaging por 3 segundos
    setTimeout(() => {
      this.setState({ isLoading: false });
      //this.pokemonPagination();
      this.fechAPI();
      }, 3000);
  }

  //funcao pra pegar mais pokemons (load da tela)
  loadMorePokemons(event) {
    const newPage = this.nextPage();
    
    this.setState({page: newPage}, () => {
      console.log("Page: " + this.state.page)
      this.fechAPI();
    });    
  }

  updateSearchTerm = (searchTerm) => {this.setState({ searchTerm });};

  render() {
    const { pokeInfo, halfPageHeight, searchTerm, isLoading, selectedItem, favorites } = this.state;
    const filteredPokemonList = FilterPokemons(pokeInfo, searchTerm);

    if (isLoading) {return <LoadingPage />;}

    //resolver quando pokemon é selecionado
    if (selectedItem) {
      return (
        <View style={styles.container}>
         <View style={styles.background}></View>
          <Button title="<-" onPress={this.backInitialAfterSelect} style={styles.backButton} />
          <CardDetail pokemon={selectedItem} />
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
      return (<CardPage pokemon={pokemon} onPress={this.clickOneItem}/> );
    });

    return (
      <View style={styles.container}>
       <View style={styles.logoContainer}>
          <Image styles={styles.logoHeader}  source={require('./assets/images/logo-header/logo-frame.png')} />
          <Text style={styles.textHeader}>ioasys pokedex</Text>
      </View>

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