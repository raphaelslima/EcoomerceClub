import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAAGnmKBHbENiZ9-wLSW2SatoHJMpvEtXI',
  authDomain: 'club-ecommerce-42502.firebaseapp.com',
  projectId: 'club-ecommerce-42502',
  storageBucket: 'club-ecommerce-42502.firebasestorage.app',
  messagingSenderId: '390947767073',
  appId: '1:390947767073:web:01cc75233b1175de36b460'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
