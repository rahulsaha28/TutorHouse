import firebase from 'firebase/app';

import 'firebase/auth';
import { firebaseConfig } from '../Config/Config';

const firebaseInitialization = () => {
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig)

}

const GoogleLogin = ()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
     return  firebase.auth().signInWithPopup(googleProvider);
}



export { firebaseInitialization, GoogleLogin }