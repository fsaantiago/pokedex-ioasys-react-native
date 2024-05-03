import { StyleSheet } from 'react-native';
import { PokeType } from '../components/Poketype';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Largura de 100% para ocupar toda a largura da tela
    height: '100%', // Altura de 100% para ocupar toda a altura da tela
    padding: 5, // Espaçamento interno para manter uma margem consistente ao redor do conteúdo

  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }, 
  item: {
    width: '48%', 
    margin: '1%', 
    padding: 10,
  },
  itemContainer: {
    width: '30%', //  Ajuste da quantidade de colunas na lista de pokemons
    marginBottom: 10, // Espaçamento das linhas na lista do pokemon
  },
card: {
    width: 104,
    height: 112,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
},
  cardFooter: {
    padding: 10,
    backgroundColor: 'black',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardFooterText: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
  },
cardBody: {
    padding: 10,
    alignItems: 'footer', // Alinha os itens centralizados horizontalmente
    justifyContent: 'flex-end', // Alinha os itens no final do card verticalmente
},
cardText: {
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'center', // Alinha o texto centralizado
},
cardImage: {
    width: 100,
    height: 100,
    marginBottom: 1,
    alignSelf: 'center', // Centraliza a imagem horizontalmente dentro do card
},
  scrollView: {
    flex: 0.5,
  },
   scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  bottomContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, // Espaçamento superior para separar o botão do conteúdo acima
  },
  searchContainerr: {
    width: 303,
    height: 54,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
  },
  errorImage: {
   width: 354, 
    height: 200,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
   cardDetailContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cardDetailImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  cardDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDetailText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default styles;
