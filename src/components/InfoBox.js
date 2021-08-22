import React from 'react';
import styled from 'styled-components/native';

import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const View = styled.View`
  width: 90%;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #5cf0c0;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;
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
  font-weight: bold;
  font-family: 'courier new';
  margin-bottom: 20px;
`;

export default function InfoBox() {
  return (
    <View>
      <Div>
        <Icon name="calendar-alt" size={30} color="#000000" />
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'courier new',
          }}>
          20/08/2021 - 20/08/2021
        </Text>
      </Div>

      <TextArea>Modelo: </TextArea>
      <TextArea>Marca: </TextArea>
      <TextArea>Cor: </TextArea>
      <TextArea>Pagamento: </TextArea>
        
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'courier new',
          marginBottom: 5,
          fontWeight: 'bold',
          marginLeft: 180,
        }}>
        R$ 100,00
      </Text>
    </View>
  );
}
