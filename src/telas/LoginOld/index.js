import React from 'react';
import Input from '../../components/Input';
import RegistroReserva from '../../components/RegistroReserva';
import {useAuth} from '../../providers/auth';
import {isLogged} from '../../services/auth';
import {
  Container,
  InputArea,
  LoginButton,
  LoginButtonText,
  Button,
  MessageButtonText,
} from './styles';

export default function Login() {
  const {user, setUser} = useAuth();
  return (
    <Container>
      <RegistroReserva />
      {/* <InputArea>
        <Input />
        <Input />

        <LoginButton>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
      </InputArea> */}

      <Button
        onPress={async () => setUser({...user, isLogged: await isLogged()})}>
        <MessageButtonText>Registrar</MessageButtonText>
      </Button>
    </Container>
  );
}
