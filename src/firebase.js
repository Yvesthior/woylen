import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSD8grpil6yGnLPT_ul7k8n44ZEWLDHLQ",
  authDomain: "woylen.firebaseapp.com",
  databaseURL: "https://woylen.firebaseio.com",
  projectId: "woylen",
  storageBucket: "woylen.appspot.com",
  messagingSenderId: "45432163514",
  appId: "1:45432163514:web:d8da5b2753b8516fab4683",
  measurementId: "G-W1FJ28JMMJ",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
