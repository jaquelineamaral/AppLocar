<<<<<<< HEAD
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginInput from '../../components/LoginInput';
import {
  Container,
  InputArea,
  LoginButton,
  LoginButtonText,
  Button,
  MessageButtonText,
} from './styles';
import {Text} from 'react-native';
import {isLogged, signIn} from '../../services/auth';
import {useAuth} from '../../providers/auth';

export default function Login({navigation: {navigate}}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const {user, setUser} = useAuth();

  const login = async () => {
    let resp = await signIn(email, senha);

    if (resp) {
      setUser({...user, isLogged: true});
      alert('Login sucesso!');
    } else alert('Login ou senha incorreto.');
  };

  return (
    <Container>
      <Icon name="car-side" size={80} color="#000000" style={{marginTop: 50}} />
      <Text style={{fontSize: 40, fontFamily: 'courier new'}}>LOCAR</Text>

      <InputArea>
        <LoginInput placeholder="Email" setInput={setEmail} />

        <LoginInput placeholder="Senha" setInput={setSenha} password={true} />

        <LoginButton onPress={login}>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
      </InputArea>

      <Button onPress={() => navigate('Cadastro')}>
        <MessageButtonText>Registrar</MessageButtonText>
      </Button>
    </Container>
  );
}
=======
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginInput from '../../components/LoginInput';
import { Container, InputArea, LoginButton, LoginButtonText, Button, MessageButtonText} from './styles';
import { Text } from 'react-native';

export default function Login({ navigation: { navigate } }) {    
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <Container>
            <Icon name="car-side" size={80} color="#000000" style={{marginTop: 50}} />
            <Text style={{fontSize: 40, fontFamily: 'courier new'}}>LOCAR</Text>

            <InputArea>
                <LoginInput 
                    placeholder="CPF/CNPJ" 
                    setInput={setCpf}
                />

                <LoginInput 
                    placeholder="Senha" 
                    setInput={setSenha}
                    password={true}
                />                

                <LoginButton>
                    <LoginButtonText>Login</LoginButtonText>
                </LoginButton>

            </InputArea>  
            
            <Button onPress={() => navigate('Cadastro')}>
                <MessageButtonText>Registrar</MessageButtonText>
            </Button>

        </Container>
    );
}
>>>>>>> 150437cc864673b79d675243eb2899c71da92141
