import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #aefee4;
  display: flex;
`;

export const ViewArea = styled.SafeAreaView`
  padding: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-family: 'courier new';
  font-weight: bold;
  margin: 10px;
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    height: 40px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    margin: 50px;
`;

export const MessageButtonText = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
`;