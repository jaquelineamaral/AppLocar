import React from 'react';

import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Container, ScrollView, BoxList, Text, ButtonBoxList} from './styles';

export default function Veiculos({navigation: {navigate}}) {
  return (
    <Container>
      <ScrollView>
        <Header placeholder="Meus Veículos" />

        <ButtonBoxList onPress={() => navigate('ReservasPorVeiculos')}>
          <BoxList>
            <Text>Carro: </Text>
            <Text>Placa: </Text>
            <Icon name="arrow-right" size={30} color="#000000" />
          </BoxList>
        </ButtonBoxList>
      </ScrollView>
    </Container>
  );
}
