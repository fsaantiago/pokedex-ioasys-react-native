import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../App';
import CardDetail from './CardDetail'; // Importe o componente da página de detalhes do cartão

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="CardDetail" component={CardDetail} /> {/* Adicione a tela de detalhes do cartão */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;