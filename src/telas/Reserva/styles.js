import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #aefee4;
`;

export const Header = styled.SafeAreaView`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
    margin-bottom: 30px;
`

export const ViewArea = styled.View`
    flex: 1;
    width: 90%;
    padding: 10px;
    background-color: #5cf0c0;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
`

export const Block = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const Button = styled.TouchableOpacity`
    width: 40%;
    height: 40px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    margin-top: 20px;
`;

export const MessageButtonText = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
`;

export const InputArea = styled.View`
    width: 100%;
    height: 40px;
    border-radius: 30px;
    margin-top: 20px;
    background-color: #ffffff;
    flex-direction: row;
`;