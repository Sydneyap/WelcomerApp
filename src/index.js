import {initialize app} from 'firebase/app'
import {
  getFirestore, collection
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJqSskt44fzdYxgH3Orx8j6Mrr6C5IfXI",
  authDomain: "welcomer-622.firebaseapp.com",
  projectId: "welcomer-622",
  storageBucket: "welcomer-622.appspot.com",
  messagingSenderId: "243775247254",
  appId: "1:243775247254:web:91085cb7331b43b90543b7"
}

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'User')

getDocs(colRef).then((snapshot) => {
    console.log(snapshot.docs)
  })
