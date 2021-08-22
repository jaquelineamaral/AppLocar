import React from 'react';

import styled from 'styled-components/native';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Container = styled.SafeAreaView`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 10px;
`;

const Div = styled.SafeAreaView`
  flex-direction: row;
`;

export default function Header({placeholder}) {
  return (
    <Container>
      <Div>
        <Icon
          name="car-side"
          size={40}
          color="#000000"
          style={{marginTop: 30, marginRight: 10}}
        />
        <Text style={{fontSize: 30, fontFamily: 'courier new', marginTop: 30}}>
          LOCAR
        </Text>
      </Div>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'courier new',
          marginTop: 50,
        }}>
        {placeholder}
      </Text>
    </Container>
  );
}
