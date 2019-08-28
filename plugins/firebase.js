import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyCcKUbbgfPdUC5qX9sNwP4v_Miv60d2X3Q',
    authDomain: 'beesnotinthetrap.firebaseapp.com',
    databaseURL: 'https://beesnotinthetrap.firebaseio.com',
    projectId: 'beesnotinthetrap',
    storageBucket: '',
    messagingSenderId: '287704322082',
    appId: '1:287704322082:web:c61210a8f4d1aeb1'
  }
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth, firebase }
