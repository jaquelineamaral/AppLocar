import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stacks/MainStack.js';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}