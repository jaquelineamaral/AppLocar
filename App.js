import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stacks'

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}