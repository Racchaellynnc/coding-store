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

  export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc('users/9KACUQeShmtpjOo6LP3A')

    const snapShot = await userRef.get();


    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }
    
      return userRef;
    };
  
export const addCollectionAndItems = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef)
}
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // This will trigger the google pop-up for google sign in.
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;