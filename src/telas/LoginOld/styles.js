import React from 'react';
import styled from 'styled-components/native';

//Container, InputArea, LoginButton, LoginButtonText, Text, Button, MessageButtonTextBold

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
    
`;

export const LoginButton = styled.TouchableOpacity`
    height: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
`;

export const LoginButtonText = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
`;

export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
`;

export const MessageButtonText = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
`;