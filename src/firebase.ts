import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

export const app = firebase.initializeApp({
    projectId: 'educapp-c4935',
    appId: '1:794945687966:web:608c4b98dcd8eb92b4c68f',
    storageBucket: 'educapp-c4935.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyCQIwrYYhcrR1JtbvXAIPKvrjSpYKUymZ0',
    authDomain: 'educapp-c4935.firebaseapp.com',
    messagingSenderId: '794945687966',
    measurementId: 'G-XZR2L4N3HZ',
});
