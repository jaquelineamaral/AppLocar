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

<<<<<<< HEAD
export default function LoginInput({
  placeholder,
  setInput,
  password,
  keyboardType,
}) {
=======
export default function LoginInput({placeholder, setInput, password, keyboardType}) {
>>>>>>> 150437cc864673b79d675243eb2899c71da92141
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
<<<<<<< HEAD
        placeholderTextColor={'grey'}
        onChangeText={text => setInput(text)}
        secureTextEntry={password}
        keyboardType={keyboardType}
        style={{}}
=======
        onChangeText={text => setInput(text)}
        secureTextEntry={password}
        keyboardType={keyboardType}
>>>>>>> 150437cc864673b79d675243eb2899c71da92141
      />
    </InputArea>
  );
}
