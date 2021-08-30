import React from 'react';

import InfoBox from '../../components/InfoBox';
import Header from '../../components/Header';

import {Container, ScrollView} from './styles';
import {useState} from 'react';
import {useEffect} from 'react';
import {getReservasDoUsuario} from '../../services/database';
import {FlatList, Text, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export default function MinhasReservas() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) buscarReservas();
  }, [isFocused]);

  const buscarReservas = async () => {
    let reservas = await getReservasDoUsuario();
    setData(reservas.reverse());
  };

  return (
    <Container>
      <ScrollView>
        <Header placeholder="Minhas Reservas" />
        {data.length > 0 ? (
          <FlatList
            data={data}
            style={{}}
            key={item => item.dataInicial.toString()}
            renderItem={({item, index}) => (
              <InfoBox
                inicio={item.data().dataInicial}
                termino={item.data().dataFinal}
                placa={item.data().placa.toUpperCase()}
                pagamento={item.data().tipoPgto.toUpperCase()}
                preco={item.data().preco}
                status={item.data().statusLocacao}
              />
            )}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Você ainda não efetuou nenhuma reserva. </Text>
          </View>
        )}
        {/* <InfoBox />
        <InfoBox />
        <InfoBox /> */}
      </ScrollView>
    </Container>
  );
}
