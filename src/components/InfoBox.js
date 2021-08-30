import React from 'react';
import styled from 'styled-components/native';

import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
<<<<<<< HEAD
import {dateBR} from '../util/date';
=======
>>>>>>> 150437cc864673b79d675243eb2899c71da92141

const Container = styled.SafeAreaView`
  width: 100%;
`;

const View = styled.View`
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
<<<<<<< HEAD
  background-color: #5cf0c0;
=======
  background-color:  #5cf0c0;
>>>>>>> 150437cc864673b79d675243eb2899c71da92141
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
<<<<<<< HEAD
  /* font-weight: bold; */
=======
  font-weight: bold;
>>>>>>> 150437cc864673b79d675243eb2899c71da92141
  font-family: 'courier new';
  margin-bottom: 20px;
`;

<<<<<<< HEAD
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
=======
export default function InfoBox() {
>>>>>>> 150437cc864673b79d675243eb2899c71da92141
  return (
    <Container>
      <View>
        <Div>
          <Icon name="calendar-alt" size={30} color="#000000" />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'courier new',
<<<<<<< HEAD
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
=======
            }}>
            20/08/2021 - 20/08/2021
          </Text>
        </Div>

        <TextArea>Modelo: </TextArea>
        <TextArea>Marca: </TextArea>
        <TextArea>Cor: </TextArea>
        <TextArea>Pagamento: </TextArea>
>>>>>>> 150437cc864673b79d675243eb2899c71da92141

        <Text
          style={{
            fontSize: 24,
            fontFamily: 'courier new',
            fontWeight: 'bold',
            marginLeft: 200,
<<<<<<< HEAD
            marginTop: -40,
          }}>
          R$ {preco}
=======
          }}>
          R$ 100,00
>>>>>>> 150437cc864673b79d675243eb2899c71da92141
        </Text>
      </View>
    </Container>
  );
}
