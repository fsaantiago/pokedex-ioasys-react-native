import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  /*box: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: '#ddd',
    padding: 5,
  },
  darkBox: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkText: {
    color: 'black',
  },*/
  card: {
    maxWidth: 288, // Equivalente a "18rem" no HTML/CSS
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5, // Adicionando borda arredondada
  },
});

export default styles;
