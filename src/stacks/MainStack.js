import React from 'react';
import { createStackNavigator}  from '@react-navigation/stack';

import Login from '../telas/Login/index.js';

const Stack = createStackNavigator();

//Adicionar as outras telas.
export default () => (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />

    </Stack.Navigator>
);
