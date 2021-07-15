import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Adicionar as outras telas.
export default function MainStack() {
    return(
        <Stack.Navigator> 
            <Stack.Screen name='Login' componente={Login} />
            
        </Stack.Navigator>
    );
}