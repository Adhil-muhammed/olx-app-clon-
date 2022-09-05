import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBXNd62bvb9mRE9sNHT9DtYc2tGakWk8Bc",
  authDomain: "fir-795d9.firebaseapp.com",
  projectId: "fir-795d9",
  storageBucket: "fir-795d9.appspot.com",
  messagingSenderId: "814968594376",
  appId: "1:814968594376:web:cc11e74955182491a96afd",
  measurementId: "G-5HYB2Q9XDQ",
};
export default firebase.initializeApp(firebaseConfig);
