import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Largura de 100% para ocupar toda a largura da tela
    height: '100%', // Altura de 100% para ocupar toda a altura da tela
    padding: 5, // Espaçamento interno para manter uma margem consistente ao redor do conteúdo
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 1,
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
    maxWidth: 150,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardFooter: {
    padding: -20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center'
  },
  cardFooterText: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
  },
  cardBody: {
    padding: 10,
  },
  cardText: {
    marginBottom: 5,
    fontSize: 20,
    alignItems: 'right',
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
    marginTop: -1,
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
    marginTop: 100,
    marginBottom: 20,
  },
  searchContainer: {
    width: 303,
    height: 54,
    marginTop: 50,
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
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 20, 
    marginBottom: 20,
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
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#EC0344',
    zIndex: -1, 
  },
  cardDetailImageTwo: {
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 20,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: 'black', // Define a cor de fundo como preto
    padding: 10,
    borderRadius: 5,
    marginLeft: 10, 
  },
   logoContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 60,
  },
  logoHeader: {
    width: 27,
    height: 21,
  },
  textHeader: {
    marginLeft: 10, 
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EC0344',
  },
});

export default styles;