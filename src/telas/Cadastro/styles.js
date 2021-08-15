import React from 'react';
import styled from 'styled-components/native';

//Container, InputArea, Button, MessageButtonText

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #aefee4;
`;

export const InputArea = styled.View`
    flex: 1;
    width: 100%;
    padding: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const BlockGrup = styled.View`
    width: 50%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    width: 40%;
    height: 40px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    margin-top: 10px;
`;

export const MessageButtonText = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
`;