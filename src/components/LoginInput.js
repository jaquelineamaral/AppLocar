import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
  background-color: #ffffff;
  flex-direction: row;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #808080;
  margin-left: 10px;
`;

export default function LoginInput({placeholder, setInput, password}) {
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        onChangeText={text => setInput(text)}
        secureTextEntry={password}
      />
    </InputArea>
  );
}
