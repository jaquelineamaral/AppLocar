import React from 'react';
import styled from 'styled-components/native';

//Container, InputArea, LoginButton, LoginButtonText, Text, Button, MessageButtonTextBold

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #aefee4;
`;

export const Texto = styled.Text`
    width: 142;
    height: 46;
    font-size: 40;
`

export const InputArea = styled.View`
    flex: 1;
    display: flex;
    width: 100%;
    padding: 40px;
    justify-content: center;
    align-items: center;   
`;

export const LoginButton = styled.TouchableOpacity`
    width:50%;
    height: 40px;
    background-color: #000000;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const LoginButtonText = styled.Text`
    font-size: 14px;
    color: #FFFFFF;
`;

export const Button = styled.TouchableOpacity`
    width: 40%;
    height: 40px;
    background-color: #000000;
    border-radius: 20px;
    margin-bottom: 50px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;

export const MessageButtonText = styled.Text`
    font-size: 14px;
    color: #FFFFFF;
`;