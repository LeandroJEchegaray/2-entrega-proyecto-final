import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp8CB3Ls_GGgz89KurfjgBiEVZf4gmU30",
  authDomain: "optix-7d5c3.firebaseapp.com",
  projectId: "optix-7d5c3",
  storageBucket: "optix-7d5c3.appspot.com",
  messagingSenderId: "474500049155",
  appId: "1:474500049155:web:5d6f13a7d4aa2efa74a136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
