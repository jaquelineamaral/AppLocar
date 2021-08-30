import React, {useState} from 'react';
import {Text} from 'react-native';

import Header from '../../components/Header';
import LoginInput from '../../components/LoginInput';

import {
  Container,
  ScrollView,
  View,
  Div,
  Button,
  MessageButtonText,
} from './styles';

export default function CadastroVeiculo() {
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [placa, setPlaca] = useState('');

  return (
    <Container>
      <ScrollView>
        <Header placeholder="Cadastrar Veículo" />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'courier new',
              marginBottom: 20,
            }}>
            Informações do veículo
          </Text>
          <LoginInput placeholder="Nome" setInput={setNome} />

          <Div>
            <LoginInput placeholder="Marca" setInput={setMarca} />
            <LoginInput
              placeholder="Ano"
              setInput={setAno}
              keyboardType={'number-pad'}
            />
          </Div>

          <Div>
            <LoginInput placeholder="Modelo" setInput={setModelo} />
            <LoginInput placeholder="Cor" setInput={setCor} />
          </Div>

          <Div>
            <LoginInput
              placeholder="Capacidade"
              setInput={setCapacidade}
              keyboardType={'number-pad'}
            />
            <LoginInput placeholder="Placa" setInput={setPlaca} />
          </Div>

          <Button>
            <MessageButtonText>Cadastrar</MessageButtonText>
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}
