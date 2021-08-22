import React from 'react';
import {Text} from 'react-native';
import Header from '../../components/Header';
import LoginInput from '../../components/LoginInput';
import {
  Container,
  View,
  Div,
  Button,
  MessageButtonText,
  ScrollView,
} from './styles';

export default function CadastroVeiculo() {
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
          <LoginInput placeholder="Nome" />

          <Div>
            <LoginInput placeholder="Marca" />
            <LoginInput placeholder="Ano" />
          </Div>

          <Div>
            <LoginInput placeholder="Modelo" />
            <LoginInput placeholder="Cor" />
          </Div>

          <Div>
            <LoginInput placeholder="Capacidade" />
            <LoginInput placeholder="Placa" />
          </Div>

          <Button>
            <MessageButtonText>Cadastrar</MessageButtonText>
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}
