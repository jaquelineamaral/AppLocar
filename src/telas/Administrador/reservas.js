import React from 'react';

import Header from '../../components/Header';
import InfoBox from '../../components/InfoBox';
import {Container, ScrollView} from './styles';

export default function TodasReservas() {
  return (
    <Container>
      <ScrollView>
        <Header placeholder="Todas as Reservas" />
        <InfoBox />
      </ScrollView>
    </Container>
  );
}
