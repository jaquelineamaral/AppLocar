import React from 'react';
import { createStackNavigator}  from '@react-navigation/stack';

import Login from '../telas/Login/index.js';
import Cadastro from '../telas/Cadastro/index.js';
import Reserva from '../telas/Reserva/index.js';
import MinhasReservas from '../telas/MinhasReservas/index';
import MeusDados from '../telas/MeusDados/index';

import Veiculos from '../telas/Administrador/veiculos.js';
import TodasReservas from '../telas/Administrador/reservas.js';
import CadastrarVeiculo from '../telas/Administrador/cadastrarVeiculo';

const Stack = createStackNavigator();

//Adicionar as outras telas.
export default () => (
    <Stack.Navigator initialRouteName="CadastrarVeiculo" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Reserva' component={Reserva} />
        <Stack.Screen name="MinhasReservas" component={MinhasReservas} />
        <Stack.Screen name="MeusDados" component={MeusDados} />
        
        <Stack.Screen name="Veiculos" component={Veiculos} />
        <Stack.Screen name="TodasReservas" component={TodasReservas} />
        <Stack.Screen name="CadastrarVeiculo" component={CadastrarVeiculo} />
    </Stack.Navigator>
);
