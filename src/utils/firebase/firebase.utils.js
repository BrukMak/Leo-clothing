import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore  } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxut-ewLXMrwryF8cnRRZO4bXyonJpIPo",
  authDomain: "leo-clothing-db.firebaseapp.com",
  projectId: "leo-clothing-db",
  storageBucket: "leo-clothing-db.appspot.com",
  messagingSenderId: "635211595700",
  appId: "1:635211595700:web:46110b6067ba14d80afce1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};