import React from 'react';

import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Container, ScrollView, BoxList, ButtonBoxList, Text} from './styles';

export default function Veiculos({navigation: {navigate}}) {
  return (
    <Container>
      <ScrollView>
        <Header placeholder="Clientes" />

        <ButtonBoxList onPress={() => navigate('ReservasPorClientes')}>
          <BoxList>
            <Text>Fulano de Tal</Text>
            <Icon name="arrow-right" size={30} color="#000000" />
          </BoxList>
        </ButtonBoxList>
      </ScrollView>
    </Container>
  );
}
