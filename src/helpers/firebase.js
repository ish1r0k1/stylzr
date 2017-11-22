import firebase from 'firebase'
import { firebaseConfig as config } from '../constants/secrets'

export const firebaseApp = firebase.initializeApp(config)
export const firebaseAuth = firebaseApp.auth()
export const firebaseDb = firebaseApp.database()
