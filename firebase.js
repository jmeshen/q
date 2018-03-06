import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBLMbOI1syrJNaQEW1vMM8yRUDNUYbr15M",
  authDomain: "q-list-app.firebaseapp.com",
  databaseURL: "https://q-list-app.firebaseio.com",
  projectId: "q-list-app",
  storageBucket: "q-list-app.appspot.com",
  messagingSenderId: "51450826758"
};
const fire = firebase.initializeApp(config);
export default fire;
