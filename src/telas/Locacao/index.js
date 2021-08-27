import React, {useState} from 'react';

import {Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {RadioButton, Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/Header';

import {
  Container,
  View,
  Div,
  ViewPicker,
  ViewModelo,
  ViewNomeCor,
  ViewMarcaCapAno,
  TextView,
  MessageButtonText,
  ButtonRegister,
} from './styles';

export default function Locacao() {
  const [veiculo, setVeiculo] = useState(['Carro 1', 'Carro 2', 'Carro 3']);
  const [vSelected, setVSelected] = useState([]);

  const [checked, setChecked] = useState('');

  const [dateInicio, setDateI] = useState(new Date());
  const [dateTermino, setDateT] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChangeI = (event, selectedDate) => {
    const currentDate = selectedDate || dateInicio;
    setShow(Platform.OS === 'ios');
    setDateI(currentDate);
  };

  const onChangeT = (event, selectedDate) => {
    const currentDate = selectedDate || dateTermino;
    setShow(Platform.OS === 'ios');
    setDateT(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <Container>
      <Header placeholder="Faça sua Reserva"/>

      <View>
        <Div>
          <ViewPicker>
            <Picker
              style={{width: 200, marginRight: 10}}
              vSelected={vSelected}
              onValueChange={itemValue => setVSelected(itemValue)}>
              {veiculo.map(v => {
                return <Picker.Item label={v} value={v} />;
              })}
            </Picker>
          </ViewPicker>

          <Text style={{fontSize: 26, fontFamily: 'courier new'}}>
            R$100,00
          </Text>
        </Div>

        <Div>
          <Button onPress={event => showMode('dateInicio')}>
            <Icon
              name="calendar-alt"
              size={40}
              color="#000000"
              style={{marginTop: 20}}
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateInicio}
                mode={mode}
                display="spinner"
                onChange={onChangeI}
              />
            )}
          </Button>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'courier new',
            }}>
            Ínicio
          </Text>

          <Button onPress={event => showMode('dateTermino')}>
            <Icon
              name="calendar-alt"
              size={40}
              color="#000000"
              style={{marginTop: 20}}
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateTermino}
                mode={mode}
                display="spinner"
                onChange={onChangeT}
              />
            )}
          </Button>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'courier new',
            }}>
            Término
          </Text>
        </Div>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'courier new',
            marginTop: 10,
          }}>
          Informações do veículo
        </Text>

        <Div>
          <ViewNomeCor>
            <TextView>Nome</TextView>
          </ViewNomeCor>
          <ViewNomeCor>
            <TextView>Cor</TextView>
          </ViewNomeCor>
        </Div>

        <Div>
          <ViewMarcaCapAno>
            <TextView>Marca</TextView>
          </ViewMarcaCapAno>
          <ViewMarcaCapAno>
            <TextView>Capacidade</TextView>
          </ViewMarcaCapAno>
          <ViewMarcaCapAno>
            <TextView>Ano</TextView>
          </ViewMarcaCapAno>
        </Div>

        <Div>
          <ViewModelo>
            <TextView>Modelo</TextView>
          </ViewModelo>
        </Div>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'courier new',
            marginTop: 10,
          }}>
          Formas de Pagamento
        </Text>

        <RadioButton.Group
          onValueChange={newValue => setChecked(newValue)}
          value={checked}>
          <Div>
            <RadioButton.Item label="Cartão" value="cartao" />
            <RadioButton.Item label="Dinheiro" value="dinheiro" />
          </Div>
        </RadioButton.Group>

        <ButtonRegister>
          <MessageButtonText>Reservar</MessageButtonText>
        </ButtonRegister>
      </View>
    </Container>
  );
}
