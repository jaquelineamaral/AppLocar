import React from 'react';

import Header from '../../components/Header';
import {Container, ScrollView, DivButton, ButtonMenu, ButtonTextMenu} from './styles';

export default function Menu({ navigation: { navigate } }) {
  return (
    <Container>
      <ScrollView>
        <Header placeholder="Administrador" />
        <DivButton>
          <ButtonMenu onPress={() => navigate('Reservas')}>
            <ButtonTextMenu>Reservas</ButtonTextMenu>
          </ButtonMenu>

          <ButtonMenu onPress={() => navigate('Veiculos')}>
            <ButtonTextMenu>Veículos</ButtonTextMenu>
          </ButtonMenu>
        </DivButton>

        <DivButton>
          <ButtonMenu onPress={() => navigate('Clientes')}>
            <ButtonTextMenu>Clientes</ButtonTextMenu>
          </ButtonMenu>

          <ButtonMenu onPress={() => navigate('CadastrarVeiculo')}>
            <ButtonTextMenu>Cadastrar Veículo</ButtonTextMenu>
          </ButtonMenu>
        </DivButton>
      </ScrollView>
    </Container>
  );
}
