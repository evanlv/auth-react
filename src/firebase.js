import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDZAHq2tlYX9q8qmCck8ob0bR9ZLpw25wA",
  authDomain: "auth-react-5c003.firebaseapp.com",
  projectId: "auth-react-5c003",
  storageBucket: "auth-react-5c003.appspot.com",
  messagingSenderId: "1083893571319",
  appId: "1:1083893571319:web:13ead42661dbaffdd17df2",
});
export default app;

export const auth = app.auth();
