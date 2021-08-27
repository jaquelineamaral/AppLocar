import React from 'react';

import InfoBox from '../../components/InfoBox';
import Header from '../../components/Header';

import {Container, ScrollView} from './styles';

export default function MinhasReservas() {
  return (
    <Container>
      <ScrollView>
        <Header placeholder="Minhas Reservas" />
        <InfoBox />
        <InfoBox />
        <InfoBox />
      </ScrollView>
    </Container>
  );
}
