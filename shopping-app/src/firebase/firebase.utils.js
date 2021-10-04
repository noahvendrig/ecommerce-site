import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCez09SUuOUf2fGim0Cj8mt1ogHMsr3Npc",
    authDomain: "shopping-db-59960.firebaseapp.com",
    projectId: "shopping-db-59960",
    storageBucket: "shopping-db-59960.appspot.com",
    messagingSenderId: "735767626788",
    appId: "1:735767626788:web:29cd4f4db926ea72d044b1",
    measurementId: "G-VJQ13VC3NC"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
