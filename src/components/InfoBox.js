import React from 'react';
import styled from 'styled-components/native';

import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {dateBR} from '../util/date';

const Container = styled.SafeAreaView`
  width: 100%;
`;

const View = styled.View`
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: #5cf0c0;
  margin-bottom: 10px;
`;

const Div = styled.View`
  width: 100%;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const TextArea = styled.Text`
  font-size: 18px;
  /* font-weight: bold; */
  font-family: 'courier new';
  margin-bottom: 20px;
`;

export default function InfoBox({
  modelo,
  marca,
  cor,
  pagamento,
  placa,
  inicio,
  termino,
  preco,
  status,
}) {
  return (
    <Container>
      <View>
        <Div>
          <Icon name="calendar-alt" size={30} color="#000000" />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'courier new',
              fontWeight: 'bold',
            }}>
            {dateBR(inicio)} - {dateBR(termino)}
            {/* 20/08/2021 - 20/08/2021 */}
          </Text>
        </Div>

        {/* <TextArea>Modelo: {modelo} </TextArea>
        <TextArea>Marca: {marca}</TextArea>
        <TextArea>Cor: {cor}</TextArea> */}
        <TextArea>Placa: {placa}</TextArea>
        <TextArea>Pagamento: {pagamento}</TextArea>
        <TextArea>
          Status:{' '}
          {status === 0 ? 'Agendado' : status === 1 ? 'Concluída' : 'Exluída'}
        </TextArea>

        <Text
          style={{
            fontSize: 24,
            fontFamily: 'courier new',
            fontWeight: 'bold',
            marginLeft: 200,
            marginTop: -40,
          }}>
          R$ {preco}
        </Text>
      </View>
    </Container>
  );
}
