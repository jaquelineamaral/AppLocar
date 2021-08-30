import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../../model/firebase';
import firestore from '@react-native-firebase/firestore';

import {Container, Title, Header, Button, ButtonName} from './styles';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  addReserva,
  estaDisponivel,
  getReservasDoUsuario,
  meusDados,
} from '../../services/database';
import {useAuth} from '../../providers/auth';

const usersCollection = firestore().collection('users');

const RegistroReserva = () => {
  // const [user, setUser] = useState('teste');
  // const {user, setUser} = useAuth();

  useEffect(() => {
    const subscriber = usersCollection
      .doc('ronansr@live.com')
      .onSnapshot(user => {
        console.log('Atualizando usuario...', user.data());
        // setUser(JSON.stringify(user.data()));
      });

    return () => subscriber();
  }, []);

  const register = async () => {
    try {
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword('ronansr@live.com', '111111');

      console.log(resp);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  const signIn = async () => {
    try {
      const {user} = await firebase
        .auth()
        .signInWithEmailAndPassword('ronansr@live.com', '111111');

      // await firebase.auth().signOut();

      const resp = firebase.auth().currentUser;

      // setUser(JSON.stringify(resp));
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  const addUser = async () => {
    try {
      // const resp = await firebase.firestore().collection('users').add({
      //   nome: 'Ronan',
      //   email: 'ronansr@live.com',
      //   endereco: 'Jose marcio pascoalino, 480',
      // });
      // usersCollection
      //   .add({
      //     nome: 'Ronan',
      //     email: 'ronansr@live.com',
      //     endereco: 'Jose marcio pascoalino, 480',
      //   })
      //   .then(resp => console.log(resp))
      //   .catch(error => console.log(error));

      const resp = await usersCollection.doc('ronansr@live.com').set({
        nome: 'Ronan',
        email: 'ronansr@live.com',
        endereco: 'Jose marcio pascoalino, 480',
      });
      console.log(resp);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  const getUsers = async () => {
    try {
      const resp = await firebase
        .firestore()
        .collection('users')
        .doc('ronansr@live.com')
        .get();
      console.log(resp);
    } catch (e) {
      console.log(e);
    }
  };

  const getDados = async () => {
    console.log(await meusDados());
  };

  return (
    <Container>
      <Header>
        <Title>ICO 20/06/2021 - 30/06/2021</Title>
        <Icon name="share-variant" size={20} style={{color: 'grey'}} />
      </Header>
      <Header>
        <Title>ICO 20/06/2021 - 30/06/2021</Title>
        {/* <Title>Icone</Title> */}
      </Header>
      <Button onPress={register}>
        <ButtonName>Registrar</ButtonName>
      </Button>

      <Button onPress={signIn}>
        <ButtonName>Login</ButtonName>
      </Button>

      <Button
        onPress={async () => {
          let resp = await addReserva(
            'ljp6050',
            new Date(),
            new Date(),
            'cartão',
          );
          alert('resp ' + resp);
        }}>
        <ButtonName>addReserva</ButtonName>
      </Button>

      <Button onPress={getReservasDoUsuario}>
        <ButtonName>minhas reservas</ButtonName>
      </Button>

      <Button
        onPress={async () => {
          let resp = await estaDisponivel('ljp6050', new Date(), new Date());
          alert(resp ? 'Sim' : 'Não');
        }}>
        <ButtonName>esta disponivel</ButtonName>
      </Button>

      {/* <Title>{user}</Title> */}
    </Container>
  );
};

export default RegistroReserva;
