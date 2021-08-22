import React from 'react';

import Header from '../../components/Header';
import {
  Container,
  ViewArea,
  Text,
  Button,
  MessageButtonText,
} from '../MeusDados/styles';

export default function MeusDados() {
  return (
    <Container>
      <Header placeholder="Meus Dados" />

      <ViewArea>
        <Text>Fulano de tal</Text>
        <Text>fulanodetal@locar.com</Text>
        <Text>123456789-09</Text>
        <Text>Rua das Margaridas, 48, Juiz de Fora - MG</Text>
      </ViewArea>

      <Button>
        <MessageButtonText>Sair</MessageButtonText>
      </Button>

      <Text>Fale conosco</Text>
      <Text>contato@locar.com</Text>
    </Container>
  );
}
