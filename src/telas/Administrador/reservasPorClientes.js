import React from 'react';

import InfoBox from '../../components/InfoBox';
import Header from '../../components/Header';

import {Container, ScrollView} from './styles';

export default function ReservasPorCliente() {
  return (
    <Container>
      <ScrollView>
        <Header placeholder="Reservas de X" />
        
        <InfoBox></InfoBox>
      </ScrollView>
    </Container>
  );
}
