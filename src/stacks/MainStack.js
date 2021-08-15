import React from 'react';
import { createStackNavigator}  from '@react-navigation/stack';

import Login from '../telas/Login/index.js';
import Cadastro from '../telas/Cadastro/index.js';
import Reserva from '../telas/Reserva/index.js';

const Stack = createStackNavigator();

//Adicionar as outras telas.
export default () => (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Reserva' component={Reserva} />

    </Stack.Navigator>
);
