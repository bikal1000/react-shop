import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDoo_H77ug3n2yP851PQ6pxYv2pKQVKu70',
  authDomain: 'crwn-db-8815a.firebaseapp.com',
  databaseURL: 'https://crwn-db-8815a.firebaseio.com',
  projectId: 'crwn-db-8815a',
  storageBucket: 'crwn-db-8815a.appspot.com',
  messagingSenderId: '685029623410',
  appId: '1:685029623410:web:aa1b885a0d6b05b563e4eb',
  measurementId: 'G-V0VPJ6DL3J'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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
      console.log('error creating users', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
