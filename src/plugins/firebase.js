import Vue from 'vue';
import * as VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Secure from '../secure.js';

Vue.use(VueFire);

const firebaseApp = firebase.initializeApp({
  // firebase api
  apiKey: Secure.get_apiKey(),
  authDomain: Secure.get_authDomain(),
  projectId: Secure.get_projectId(),
  storageBucket: Secure.get_storageBucket(),
  messagingSenderId: Secure.get_messagingSenderId(),
  appId: Secure.get_appId(),
  measurementId: Secure.get_measurementId()
});

export const db = firebaseApp.firestore();
