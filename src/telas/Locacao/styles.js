import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #aefee4;
`;
export const Scroll = styled.ScrollView`
  flex: 1;
  /* align-items: center; */
  background-color: #aefee4;
`;

export const View = styled.View`
  width: 90%;
  padding: 5px;
  border-radius: 10px;
  background-color: #5cf0c0;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const Div = styled.View`
  width: 100%;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const ViewPicker = styled.View`
  width: 60%;
  height: 40px;
  border-radius: 20px;
  margin-top: 10px;
  margin-right: 15px;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
`;

export const ViewNomeCor = styled.View`
  flex: 1;
  height: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ViewMarcaCapAno = styled.View`
  flex: 1;
  height: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ViewModelo = styled.View`
  flex: 1;
  height: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const TextView = styled.Text`
  font-size: 16px;
  color: #555;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  margin-bottom: 20px;
`;

export const MessageButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
