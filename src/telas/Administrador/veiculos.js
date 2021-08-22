import React from 'react';

import Header from '../../components/Header';
import {Container, BoxCar, ScrollView, Text} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Veiculos() {
  return (
    <Container>
      <Header placeholder="Meus Veículos" />
      <ScrollView>
        <BoxCar>
          <Text>Carro: </Text>
          <Text>Placa: </Text>
          <Icon name="arrow-right" size={30} color="#000000" />
        </BoxCar>

        <BoxCar>
          <Text>Carro: </Text>
          <Text>Placa: </Text>
          <Icon name="arrow-right" size={30} color="#000000" />
        </BoxCar>
        
      </ScrollView>
    </Container>
  );
}
