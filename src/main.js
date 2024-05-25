import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCbC-fdYOgfS8N20oizPiSrhUcOOJQno-8",
  authDomain: "project2024-1f090.firebaseapp.com",
  projectId: "project2024-1f090",
  storageBucket: "project2024-1f090.appspot.com",
  messagingSenderId: "938564212362",
  appId: "1:938564212362:web:5b9c8f3ac1e6b46f6b7f73"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount('#app');