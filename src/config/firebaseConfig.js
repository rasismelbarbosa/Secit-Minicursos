import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyDmnjxFeRfIzIQNaCTUxclVY35BDooVjYQ",
  authDomain: "projetosrasismael.firebaseapp.com",
  projectId: "projetosrasismael",
  storageBucket: "projetosrasismael.appspot.com",
  messagingSenderId: "315979474282",
  appId: "1:315979474282:web:e92a3af08588fa496f7113",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
