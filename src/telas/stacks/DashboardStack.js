import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../telas/Login/index.js';

const Stack = createStackNavigator();

//Adicionar as outras telas.
export default () => (
  <Stack.Navigator
    initialRouteName="DashboardCliente"
    screenOptions={{headerShown: true}}>
    <Stack.Screen name="Dashboard" component={Login} />
  </Stack.Navigator>
);
