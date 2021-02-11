import * as firebase from 'firebase';
import "firebase/auth" ;


const firebaseConfig = {
    apiKey: "AIzaSyBwD_yPMy0noeu0MxL1gpCFNYuVV2pUHu4",
    authDomain: "rncybn.firebaseapp.com",
    projectId: "rncybn",
    storageBucket: "rncybn.appspot.com",
    messagingSenderId: "602662274172",
    appId: "1:602662274172:web:33ba6475e0fc509d5635f9"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;