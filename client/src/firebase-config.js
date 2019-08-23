import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCV43SeznPPNHaSiTXJaUIX9XeamWbSTNI',
  authDomain: 'eclipse-cinema-b1dd9.firebaseapp.com',
  databaseURL: 'https://eclipse-cinema-b1dd9.firebaseio.com',
  projectId: 'eclipse-cinema-b1dd9',
  storageBucket: 'gs://eclipse-cinema-b1dd9.appspot.com',
  messagingSenderId: '485407404413',
  appId: '1:485407404413:web:9a2d4e5f1f39973a',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
