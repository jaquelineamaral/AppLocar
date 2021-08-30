import firestore from '@react-native-firebase/firestore';
import firebase from '../model/firebase';

export const signIn = async (aEmail, aSenha) => {
  try {
    const {user} = await firebase
      .auth()
      .signInWithEmailAndPassword(aEmail, aSenha);
    return true;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    return true;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};

export const isLogged = async () => {
  try {
    const user = firebase.auth().currentUser.email;

    if (user) {
      return true;
    }
    return false;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};

export const register = async (aEmail, aSenha) => {
  try {
    const resp = await firebase
      .auth()
      .createUserWithEmailAndPassword(aEmail, aSenha);

    return true;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};
