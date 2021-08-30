import React, {useState} from 'react';

import LoginInput from '../../components/LoginInput';
import {
  Container,
  Head,
  InputArea,
  Button,
  MessageButtonText,
  BlockGrup,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAvoidingView, Platform, Text, ScrollView} from 'react-native';
import {register} from '../../services/auth';
import {addUser} from '../../services/database';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../providers/auth';

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

  const {user, setUser} = useAuth();
  const navigation = useNavigation();

  const registrar = async () => {
    let resp = await register(email, senha);

    if (resp) {
      if (
        await addUser(
          email,
          nome,
          telefone,
          cpf,
          cep,
          endereco,
          numero,
          '',
          '',
          '',
        )
      ) {
        alert('Registrado com sucesso!');
        setUser({...user, isLogged: true});
      }
    } else {
      alert('Erro ao adicionar no banco');
    }
    // alert('Erro ao cadastrar. Tente novamente!');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Container>
        <ScrollView>
          <Head>
            <Icon
              name="car-side"
              size={80}
              color="#000000"
              style={{marginTop: 50}}
            />
            <Text style={{fontSize: 40, fontFamily: 'courier new'}}>LOCAR</Text>
          </Head>

          <InputArea>
            <LoginInput placeholder="Nome" setInput={setNome} />
            <LoginInput placeholder="E-mail" setInput={setEmail} />
            <LoginInput placeholder="CPF/CNPJ" setInput={setCpf} />

            <BlockGrup>
              <LoginInput
                placeholder="CEP"
                setInput={setCep}
                keyboardType={'number-pad'}
              />
              <LoginInput
                placeholder="Número"
                setInput={setNumero}
                keyboardType={'number-pad'}
              />
            </BlockGrup>

            <LoginInput placeholder="Endereço" setInput={setEndereco} />
            <LoginInput
              placeholder="Telefone"
              setInput={setTelefone}
              keyboardType={'number-pad'}
            />
            <LoginInput placeholder="Senha" setInput={setSenha} />
            <LoginInput
              placeholder="Confirmar senha"
              setInput={setConfirmarSenha}
            />

            <Button onPress={registrar}>
              <MessageButtonText>Cadastrar</MessageButtonText>
            </Button>
          </InputArea>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
}
