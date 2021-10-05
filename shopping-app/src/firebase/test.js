import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// Querying data #1
firestore.collection('users').doc('nPZInCr1dkDFxLfOzcxR')

// Querying data #2
firestore.doc('/users/nPZInCr1dkDFxLfOzcxR')
firestore.collection('/users/nPZInCr1dkDFxLfOzcxR/cartItems')