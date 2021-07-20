import React from 'react';
import Input from '../../components/Input';
import { Container, InputArea, LoginButton, LoginButtonText, Button, MessageButtonText} from './styles';

export default function Login() {
    return (
        <Container>
            <InputArea>
                <Input />
                <Input />                

                <LoginButton>
                    <LoginButtonText>Login</LoginButtonText>
                </LoginButton>
            </InputArea>

            
            <Button>
                <MessageButtonText>Registrar</MessageButtonText>
            </Button>
        </Container>
    );
}