import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #5cf0c0;
  width: 95%;
  border-radius: 10px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 14px;
  margin: 5px;
`;

export const ButtonName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  /* flex: 1; */
  padding: 20px;
  background-color: lightblue;
  border-radius: 10px;
  margin: 15px;
`;
