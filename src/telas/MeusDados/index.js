import React from 'react';
import {useState, useEffect} from 'react';

import Header from '../../components/Header';
import {meusDados} from '../../services/database';
import {
  Container,
  ViewArea,
  Text,
  Button,
  MessageButtonText,
} from '../MeusDados/styles';

export default function MeusDados() {
  const [nome, setNome] = useState('...');
  const [email, setEmail] = useState('...');
  const [cpf, setCpf] = useState('...');
  const [endereco, setEndereco] = useState('...');

  useEffect(() => {
    meusRegistro();
  }, []);

  const meusRegistro = async () => {
    let dados = await meusDados();
    setNome(dados.nome);
    setEmail(dados.email);
    setCpf(dados.cpf);
    setEndereco(dados.rua);
  };

  return (
    <Container>
      <Header placeholder="Meus Dados" />

      <ViewArea>
        <Text>{nome}</Text>
        <Text>{email}</Text>
        <Text>{cpf}</Text>
        <Text>{endereco}</Text>
      </ViewArea>

      <Button>
        <MessageButtonText>Sair</MessageButtonText>
      </Button>

      <Text>Fale conosco</Text>
      <Text>contato@locar.com</Text>
    </Container>
  );
}
