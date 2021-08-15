import React, { useState } from 'react';

import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, Header, ViewArea, Block, Button, MessageButtonText, InputArea } from './styles';

export default function Reserva(){

    const [veiculo, setVeiculo] = useState (['Carro 1', 'Carro 2', 'Carro 3'])
    const [vSelected, setVSelected] = useState([])

    return(
        <Container>
            <Header> 
                <Icon name="car-side" size={50} color="#000000" style={{marginTop: 50}} />
                <Text style={{fontSize: 40, fontFamily: 'courier new'}}>LOCAR</Text>
            </Header>

            <Text style={{fontSize: 20, fontFamily: 'courier new', marginBottom: 10}}>Faça sua reserva</Text>

            <ViewArea>
                <Block>
                    <Picker style={{width: 200, marginRight: 10}}
                        selectedValue={vSelected}
                        onValueChange={(itemValue) => setVSelected(itemValue)}
                    >
                        {
                            veiculo.map(v => {
                                return <Picker.Item label={v} value={v} />
                            })
                        }
                    </Picker>

                    <Text style={{fontSize: 22, fontFamily: 'courier new'}}>R$ {vSelected}</Text>
                </Block>

                <Text style={{fontSize: 20, fontFamily: 'courier new', marginTop: 20}}>Informações do veículo</Text>
                

                <Button>
                    <MessageButtonText>Reservar</MessageButtonText>
                </Button>

            </ViewArea>
            


        </Container>
    );
}