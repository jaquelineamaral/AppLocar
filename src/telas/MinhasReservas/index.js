import React from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {Container, Header, View, Group, Footer} from './styles';

export default function MinhasReservas({navigation: {navigate}}) {
  return (
    <Container>
      <Header>
        <Icon
          name="car-side"
          size={50}
          color="#000000"
          style={{marginTop: 30, marginRight: 10}}
        />
        <Text style={{fontSize: 40, fontFamily: 'courier new', marginTop: 30}}>
          LOCAR
        </Text>
      </Header>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'courier new',
          marginBottom: 10,
        }}>
        Minhas Reservas
      </Text>

      {/* <View>
        <Group>
          <Icon
            name="calendar-alt"
            size={25}
            color="#000000"
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: 18, fontFamily: 'courier new'}}>
            01/01/2021 - 10/01/2021
          </Text>
        </Group>

        <Text
          style={{
            fontSize: 18,
            fontFamily: 'courier new',
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          Carro:{' '}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'courier new',
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          Placa:{' '}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'courier new',
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          Cor:{' '}
        </Text>

      
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'courier new',
              marginBottom: 10,
              fontWeight: 'bold',
            }}>
            Pagamento:{' '}
          </Text>

          <Text style={{fontSize: 22, fontFamily: 'courier new', marginBottom: 10, fontWeight: 'bold', justifyContent:'center'}}>
          R$ 100,00{' '}
        </Text>
          
       
      </View> */}

      <Footer>
        <Button onPress={() => navigate('Reserva')}>
          <Icon name="home" size={30} color="#000000" style={{marginTop: 20}} />
        </Button>
        <Button onPress={() => navigate('MinhasReservas')}>
          <Icon name="list" size={30} color="#000000" style={{marginTop: 20}} />
        </Button>
        <Button onPress={() => navigate('MeusDados')}>
          <Icon name="cog" size={30} color="#000000" style={{marginTop: 20}} />
        </Button>
      </Footer>
    </Container>
  );
}
