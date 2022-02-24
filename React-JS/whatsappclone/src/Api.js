import { async } from '@firebase/util';
import * as firebase from 'firebase/app'
import 'firebase/firebase-auth';
import 'firebase/firebase-firestone';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
    fbPopup:async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return result;
    }
}