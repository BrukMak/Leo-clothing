import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
  } from "firebase/auth";
import { doc, 
        getDoc, 
        setDoc, 
        getFirestore,
        collection,
        writeBatch,
        query,
        getDocs
    } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  console.log(Array.isArray(objectsToAdd))
  
  for (let i=0; i < 4; i++ ){
    console.log(objectsToAdd[i]);
  };

  objectsToAdd.forEach((object) => {
    console.log("Heree")
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);

  });

  
  await batch.commit();
  console.log('done');
};
 
export const getCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, 'Categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

    return categoryMap;

}


export const createUserDocumentFromAuth = async (userAuth, additionalInformation) =>{
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
  
    try {
      await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInformation
          
          });
  
    }catch (error) {
      console.log("error creating the user" , error.message)
  
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);