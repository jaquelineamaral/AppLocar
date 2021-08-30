import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Locacao from '../telas/Locacao/index.js';
import MinhasReservas from '../telas/MinhasReservas/index';
import MeusDados from '../telas/MeusDados/index';

const Stack = createBottomTabNavigator();
// const Stack = createStackNavigator();

//Adicionar as outras telas.
export default () => (
  <Stack.Navigator
    initialRouteName="DashboardCliente"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Locacao') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'MinhasReservas') {
          iconName = focused ? 'list' : 'list';
        } else if (route.name === 'MeusDados') {
          iconName = focused ? 'cog' : 'cog';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#5cf0c0',
        borderTopColor: '#5cf0c0',
        elevation: 0,
      },
    }}>
    <Stack.Screen name="Locacao" component={Locacao} />
    <Stack.Screen name="MinhasReservas" component={MinhasReservas} />
    <Stack.Screen name="MeusDados" component={MeusDados} />
  </Stack.Navigator>
);
