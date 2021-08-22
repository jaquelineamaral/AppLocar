import React, {useState} from 'react';

import LoginInput from '../../components/LoginInput';
import {
  Container,
  ScrollView,
  InputArea,
  Button,
  MessageButtonText,
  BlockGrup,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAvoidingView, Platform, Text} from 'react-native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Container>
        <Icon
          name="car-side"
          size={80}
          color="#000000"
          style={{marginTop: 50}}
        />
        <Text style={{fontSize: 40, fontFamily: 'courier new'}}>LOCAR</Text>

        <InputArea>
          <LoginInput placeholder="Nome" setInput={setNome} />
          <LoginInput placeholder="E-mail" setInput={setEmail} />
          <LoginInput placeholder="CPF/CNPJ" setInput={setCpf} />

          <BlockGrup>
            <LoginInput
              placeholder="CEP"
              setInput={setCep}
              style={{width: 50}}
            />
            <LoginInput placeholder="Número" setInput={setNumero} />
          </BlockGrup>

          <LoginInput placeholder="Endereço" setInput={setEndereco} />
          <LoginInput placeholder="Telefone" setInput={setTelefone} />
          <LoginInput placeholder="Senha" setInput={setSenha} />
          <LoginInput
            placeholder="Confirmar senha"
            setInput={setConfirmarSenha}
          />

          <Button>
            <MessageButtonText>Cadastrar</MessageButtonText>
          </Button>
        </InputArea>
      </Container>
    </KeyboardAvoidingView>
  );
}
