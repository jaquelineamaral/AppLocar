import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 45px;
  padding-left: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
  background-color: #ffffff;
  flex-direction: row;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: #808080;
  margin-left: 10px;
`;

export default function LoginInput({
  placeholder,
  setInput,
  password,
  keyboardType,
}) {
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        onChangeText={text => setInput(text)}
        secureTextEntry={password}
        keyboardType={keyboardType}
        style={{}}
      />
    </InputArea>
  );
}
