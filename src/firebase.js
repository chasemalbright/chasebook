import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCXJA_F4NCgMOA0CZfe9W2xndpvMp5Gw1U",
    authDomain: "fb-clone-e5b72.firebaseapp.com",
    projectId: "fb-clone-e5b72",
    storageBucket: "fb-clone-e5b72.appspot.com",
    messagingSenderId: "180122093517",
    appId: "1:180122093517:web:2edf3d47886aed0775e684"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
