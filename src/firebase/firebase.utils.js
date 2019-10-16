import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA8iEzrB2tWOy3qONrElno0Mc_Gw7_Zyas",
    authDomain: "my-project-b3f18.firebaseapp.com",
    databaseURL: "https://my-project-b3f18.firebaseio.com",
    projectId: "my-project-b3f18",
    storageBucket: "my-project-b3f18.appspot.com",
    messagingSenderId: "1027524737530",
    appId: "1:1027524737530:web:92a4c54a99b94915f88c43"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;