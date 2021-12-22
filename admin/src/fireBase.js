
import firebase from "firebase/compat";




 const firebaseConfig= {
    apiKey: "AIzaSyAUkxWWAOv-yS4grcmR379__gIVuYxJFa0",
    authDomain: "netflix-8b62a.firebaseapp.com",
    projectId: "netflix-8b62a",
    storageBucket: "netflix-8b62a.appspot.com",
    messagingSenderId: "1004431133093",
    appId: "1:1004431133093:web:5ffd9118d683870385404c",
    measurementId: "G-Y7EE57YXSG"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
 
// const storage = getStorage();

  export default storage;