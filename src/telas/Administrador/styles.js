import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  display: flex;
  background-color: #aefee4;
`;

export const ScrollView = styled.ScrollView` `;

export const View = styled.SafeAreaView`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #5cf0c0;
  align-items: center;
`;

export const BoxList = styled.View`
  margin: 20px;
  padding: 12px;
  border-radius: 10px;
  background-color: #5cf0c0;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: 'courier new';
`;

export const Div = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: center;
`;

export const DivButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  color: #ffffff;
`;

export const ButtonMenu = styled.TouchableOpacity`
  width: 45%;
  height: 100px;
  padding: 12px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #5cf0c0;
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ButtonTextMenu = styled.Text`
  font-size: 18px;
  color: #000000;
  font-family: 'courier new';
  font-weight: bold;
`;

export const ButtonBoxList = styled.TouchableOpacity`

`;