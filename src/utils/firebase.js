import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../config';
import { currentUserPromise, fetchUserObject } from './localstorage';

// You can remove it
if (FIREBASE_CONFIG.apiKey.length < 1) {
  alert('Please fill your Firebase settings to config.js ');
}

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
export const firebaseStorage = firebaseApp.storage().ref();

const FireBaseTools = {
  loginUser: (email, password) => {
    return firebaseAuth.signInWithEmailAndPassword(email, password).then(user => {
      // save user to localstorage
      return fetchUserObject(user).then(user => {
        return user;
      });
    }).catch(error => {
      return {
        errorCode: error.code,
        errorMessage: error.message,
      };
    });
  },
  logoutUser: () => {
    return firebaseAuth.signOut().then(() => {
      // Sign-out successful and clear data.
      localStorage.clear();
      return {
        success: true,
        message: 'logout',
      };
    });
  },
  fetchUser: () => {
    return new Promise((resolve, reject) => {
      currentUserPromise().then(user => {
        if (user) {
          resolve(user);
        }
      });
      firebaseAuth.onAuthStateChanged(user => {
        resolve(firebase.auth().currentUser);
        if (user) {
          fetchUserObject(firebase.auth().currentUser).then(user => {
            resolve(user);
          });
        } else {
          resolve(null);
        }
      });
    });
  },
  registerUser: (user) => {
    return firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).then(user => {
      return fetchUserObject(user).then(user => {
        return user;
      });
    }).catch(error => {
      return {
        errorCode: error.code,
        errorMessage: error.message,
      };
    });
  },
};

export default FireBaseTools;
