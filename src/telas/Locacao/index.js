import React, {useState} from 'react';

import {Text, View as ViewReact} from 'react-native';
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
  Scroll,
} from './styles';
import {useEffect} from 'react';
import {
  addReserva,
  estaDisponivel,
  getTodosVeiculos,
} from '../../services/database';
import date, {dateBR, intervalDateUTC} from '../../util/date';

export default function Locacao() {
  const [veiculo, setVeiculo] = useState(['Carro 1', 'Carro 2', 'Carro 3']);
  const [vSelected, setVSelected] = useState([]);

  const [checked, setChecked] = useState('');

  const [dateInicio, setDateI] = useState(new Date());
  const [dateTermino, setDateT] = useState(new Date());
  const [inicio, setInicio] = useState(/*dateBR(dateInicio)*/ null);
  const [termino, setTermino] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState('Nome');
  const [placa, setPlaca] = useState('Nome');
  const [preco, setPreco] = useState(0);
  const [cor, setCor] = useState('Cor');
  const [marca, setMarca] = useState('Marca');
  const [capacidade, setCapacidade] = useState('Capacidade');
  const [ano, setAno] = useState('Ano');
  const [modelo, setModelo] = useState('Modelo');
  const [diaria, setDiaria] = useState('Diária');
  const [loading, setLoading] = useState(true);

  const onChangeI = (event, selectedDate) => {
    const currentDate = selectedDate || dateInicio;
    setShow(Platform.OS === 'ios');
    setDateI(currentDate);
    // console.log(currentDate);
    setInicio(dateBR(currentDate));
    setTotal();
  };

  const onChangeT = (event, selectedDate) => {
    const currentDate = selectedDate || dateTermino;
    setShow(Platform.OS === 'ios');
    setDateT(currentDate);
    setTermino(dateBR(currentDate));
    setTotal();
  };

  const setTotal = async () => {
    if (inicio !== null && termino !== null) {
      let intervalo = intervalDateUTC(inicio, termino);
      let dias = 1;
      let selecionado = veiculo.filter(item => item.id === vSelected);

      dias += intervalo.days + intervalo.months * 30 + intervalo.years * 365;
      console.log('dias', dias);
      console.log('selecionado', vSelected);

      checked === 'dinheiro'
        ? setPreco(dias * selecionado[0].data().diaria * 0.9)
        : setPreco(dias * selecionado[0].data().diaria);
    }
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  useEffect(() => {
    getVeiculos();
  }, []);

  const getVeiculos = async () => {
    let veiculos = await getTodosVeiculos();
    // let placas = [];

    // veiculos.map(item => placas.push(item.data().modelo));
    setVeiculo(veiculos);
    setLoading(false);
  };

  const mostrarDadosVeiculo = escolhido => {
    let selecionado = veiculo.filter(item => item.id === escolhido);

    // console.log('Selecinado', selecionado[0].data());

    setPlaca(selecionado[0].id);
    setNome(selecionado[0].data().nome.toUpperCase());
    setCor(selecionado[0].data().cor.toUpperCase());
    setMarca(selecionado[0].data().marca.toUpperCase());
    setCapacidade(selecionado[0].data().capacidade.toUpperCase());
    setAno(selecionado[0].data().ano.toUpperCase());
    setModelo(selecionado[0].data().modelo.toUpperCase());
    setDiaria(parseFloat(selecionado[0].data().diaria));
  };

  const reservar = async () => {
    await setTotal();
    if (dateTermino.getTime() >= dateInicio.getTime()) {
      if (checked) {
        if (
          await estaDisponivel(vSelected.toLowerCase(), dateInicio, dateTermino)
        ) {
          let resp = await addReserva(
            vSelected.toLowerCase(),
            dateInicio,
            dateTermino,
            checked,
            preco.toFixed(2),
          );
          if (resp) alert('Reserva concluída!');
          else alert('Erro ao realizar reserva. Tente novamente');
        } else {
          alert('Não disponível nessa data');
        }
      } else alert('Selecione o tipo de pagamento.');
    } else alert('Data inválida! Verifique novamente.');
  };

  return (
    <Scroll>
      <Container>
        <Header placeholder="Faça sua Reserva" />

        <View>
          <Div>
            <ViewPicker>
              <Picker
                style={{width: 200, marginRight: 10}}
                selectedValue={vSelected}
                onValueChange={itemValue => {
                  setVSelected(itemValue);
                  mostrarDadosVeiculo(itemValue);
                }}>
                {!loading &&
                  veiculo.map(v => {
                    return <Picker.Item label={v.data().modelo} value={v.id} />;
                  })}
              </Picker>
            </ViewPicker>

            <Text
              style={{
                flex: 1,
                fontSize: 22,
                fontFamily: 'courier new',
                fontWeight: 'bold',
              }}>
              R${preco.toFixed(2)}
            </Text>
          </Div>

          <Div>
            <Button onPress={event => showMode('dateInicio')}>
              <Icon
                name="calendar-alt"
                size={30}
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
            <ViewReact style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: 'courier new',
                }}>
                Ínicio
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: 'courier new',
                }}>
                {inicio}
              </Text>
            </ViewReact>

            <Button onPress={event => showMode('dateTermino')}>
              <Icon
                name="calendar-alt"
                size={30}
                color="#000000"
                style={{marginTop: 20}}
              />
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateTermino}
                  minimumDate={dateInicio || new Date()}
                  mode={mode}
                  display="spinner"
                  onChange={onChangeT}
                />
              )}
            </Button>
            <ViewReact style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: 'courier new',
                }}>
                Término
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: 'courier new',
                }}>
                {termino}
              </Text>
            </ViewReact>
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
              <TextView>{placa}</TextView>
            </ViewNomeCor>
            <ViewNomeCor>
              <TextView>{cor}</TextView>
            </ViewNomeCor>
          </Div>

          <Div>
            <ViewMarcaCapAno>
              <TextView>{marca}</TextView>
            </ViewMarcaCapAno>
            <ViewMarcaCapAno>
              <TextView>{capacidade}</TextView>
            </ViewMarcaCapAno>
            <ViewMarcaCapAno>
              <TextView>{ano}</TextView>
            </ViewMarcaCapAno>
          </Div>

          <Div>
            <ViewModelo>
              <TextView>{modelo}</TextView>
            </ViewModelo>
            <ViewModelo>
              <TextView>
                {typeof diaria === 'string'
                  ? diaria
                  : 'R$ ' + diaria.toFixed(2)}
              </TextView>
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
            onValueChange={newValue => {
              setChecked(newValue);
              setTotal();
            }}
            value={checked}>
            <Div>
              <RadioButton.Item label="Cartão" value="cartao" />
              <RadioButton.Item label="Dinheiro" value="dinheiro" />
            </Div>
          </RadioButton.Group>

          <ButtonRegister onPress={reservar}>
            <MessageButtonText>Reservar</MessageButtonText>
          </ButtonRegister>
        </View>
      </Container>
    </Scroll>
  );
}
