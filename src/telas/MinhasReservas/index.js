import React from 'react';

import InfoBox from '../../components/InfoBox';
import Header from '../../components/Header';

import {Container, ScrollView} from './styles';

export default function MinhasReservas() {
  return (
    <Container>
      <Header placeholder="Minhas Reservas"/>

      <ScrollView>
        <InfoBox/>
        <InfoBox/>
        <InfoBox/>
      </ScrollView>
    </Container>
  );
}
