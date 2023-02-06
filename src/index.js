import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJqSskt44fzdYxgH3Orx8j6Mrr6C5IfXI",
  authDomain: "welcomer-622.firebaseapp.com",
  projectId: "welcomer-622",
  storageBucket: "welcomer-622.appspot.com",
  messagingSenderId: "243775247254",
  appId: "1:243775247254:web:91085cb7331b43b90543b7"
}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

  import { initializeApp } from 'firebase/app'



  // init firebase
  initializeApp(firebaseConfig)
