import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOG7sZw03hoG0IR_XZBaQFuQ8nrW0-9bA",
    authDomain: "fir-vue-electronics.firebaseapp.com",
    projectId: "fir-vue-electronics",
    storageBucket: "fir-vue-electronics.appspot.com",
    messagingSenderId: "8141206823",
    appId: "1:8141206823:web:e17059d1b4ee39346da502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
