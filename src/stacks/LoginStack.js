import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../telas/Login/index.js';
import Cadastro from '../telas/Cadastro/index.js';
import Locacao from '../telas/Locacao/index.js';
import MinhasReservas from '../telas/MinhasReservas/index';
import MeusDados from '../telas/MeusDados/index';

import Menu from '../telas/Administrador/menu';
import Veiculos from '../telas/Administrador/veiculos.js';
import Reservas from '../telas/Administrador/reservas.js';
import Clientes from '../telas/Administrador/clientes';
import CadastrarVeiculo from '../telas/Administrador/cadastrarVeiculo';
import ReservasPorCliente from '../telas/Administrador/reservasPorClientes.js';
import ReservasPorVeiculo from '../telas/Administrador/reservasPorVeiculos.js';

const Stack = createStackNavigator();

//Adicionar as outras telas.
export default () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Cadastro" component={Cadastro} />
    {/* <Stack.Screen name="Locacao" component={Locacao} />
    <Stack.Screen name="MinhasReservas" component={MinhasReservas} />
    <Stack.Screen name="MeusDados" component={MeusDados} /> */}

    {/* <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Veiculos" component={Veiculos} />
        <Stack.Screen name="Reservas" component={Reservas} />
        <Stack.Screen name="Clientes" component={Clientes} />
        <Stack.Screen name="CadastrarVeiculo" component={CadastrarVeiculo} />
        <Stack.Screen name="ReservasPorClientes" component={ReservasPorCliente} />
        <Stack.Screen name="ReservasPorVeiculos" component={ReservasPorVeiculo} /> */}
  </Stack.Navigator>
);
