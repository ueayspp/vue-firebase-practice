import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './scss/main.scss'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBbFd2BulpUP3IU95OSbDgc7vlDWAtcwIU',
  authDomain: 'vue-firebase-practice-1398e.firebaseapp.com',
  projectId: 'vue-firebase-practice-1398e',
  storageBucket: 'vue-firebase-practice-1398e.appspot.com',
  messagingSenderId: '1008668249407',
  appId: '1:1008668249407:web:f58957dcc1d6b3f25cd78a',
  measurementId: 'G-RCFF9FZEWD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

createApp(App).use(router).mount('#app')
