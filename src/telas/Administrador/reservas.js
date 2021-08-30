import React from 'react';

import InfoBox from '../../components/InfoBox';
import Header from '../../components/Header';

import {Container, ScrollView} from './styles';

export default function Reservas() {
  return (
    <Container>
      <ScrollView>
        <Header placeholder="Todas as Reservas" />

        <InfoBox />
        <InfoBox />
      </ScrollView>
    </Container>
  );
}
