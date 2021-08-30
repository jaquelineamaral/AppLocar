import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBSeQoZYZ_fZUv4vOqnc2YRJafGS9AgVDc',
  authDomain: 'applocar-c1521.firebaseapp.com',
  projectId: 'applocar-c1521',
  storageBucket: 'applocar-c1521.appspot.com',
  messagingSenderId: '314721039671',
  appId: '1:314721039671:web:d832d9ff6289ddce6f16b2',
};
// Initialize Firebase
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({experimentalForceLongPolling: true});
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
