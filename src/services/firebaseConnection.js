import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAdEMZMB-Onddc-BU0BXc-j_Iozsa4cuh8",
    authDomain: "tickets-f3a7c.firebaseapp.com",
    projectId: "tickets-f3a7c",
    storageBucket: "tickets-f3a7c.firebasestorage.app",
    messagingSenderId: "18055629190",
    appId: "1:18055629190:web:bb74253f5844d6fd63c407",
    measurementId: "G-TPW5422KMK"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)

  export { auth, db, storage }