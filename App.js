import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider, useAuth} from './src/providers/auth.js';
import MainStack from './src/stacks/MainStack.js';
import LoginStack from './src/stacks/LoginStack.js';
import DashboardStack from './src/stacks/DashboardStack.js';
import {isLogged} from './src/services/auth.js';
import {useEffect} from 'react';
import {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

const Router = () => {
  const {user, setUser} = useAuth();
  console.log('usuario: ', user);
  return user.isLogged ? <DashboardStack /> : <LoginStack />;
};

export default function App() {
  const [loading, setLoading] = useState(true);
  // const {user, setUser} = useAuth();

  // useEffect(() => {

  //   estaLogado();
  // }, []);

  // const estaLogado = async () => {
  //   if (await isLogged()) {
  //     setUser({...user, isLogged: true});
  //   } else {
  //     setUser({...user, isLogged: false});
  //     // }
  //     setLoading(false);
  //   }
  // };

  // return loading ? (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       backgroundColor: 'grey',
  //     }}>
  //     <ActivityIndicator size="large" color="black" />
  //   </View>
  // ) :
  return (
    <AuthProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AuthProvider>
  );
}

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// import MainStack from './src/stacks/MainStack.js';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MainStack />
//     </NavigationContainer>
//   );
// }

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';

// import {AuthProvider, useAuth} from './src/providers/auth.js';
// import MainStack from './src/stacks/MainStack.js';
// import LoginStack from './src/stacks/DashboardStack.js';
// import DashboardStack from './src/stacks/DashboardStack.js';

// const Router = () => {
//   const {user} = useAuth();
//   console.log('usuario: ', user);
//   return user.isLogged ? <DashboardStack /> : <MainStack />;
// };

// export default function App() {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <Router />
//       </NavigationContainer>
//     </AuthProvider>
//   );
// }
