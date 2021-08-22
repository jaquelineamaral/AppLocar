import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #aefee4;
`;

export const ScrollView = styled.ScrollView`

`;

export const BoxCar = styled.View`
  width: 95%;
  padding: 15px;
  border-radius: 10px;
  background-color: #5cf0c0;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-family: 'courier new';
`;

export const View = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #5cf0c0;
  align-items: center;
`;

export const Div = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 50%;
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    height: 40px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    margin-top: 30px;
`;

export const MessageButtonText = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
`;