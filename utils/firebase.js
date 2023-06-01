// import { firestore } from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, setDoc, doc, collection, connectFirestoreEmulator, query, orderBy } from 'firebase/firestore';
//firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDRxuZqR9AWHYnADGqO40oA2qafs-oGQY",
    authDomain: "toolboxai-a1954.firebaseapp.com",
    projectId: "toolboxai-a1954",
    storageBucket: "toolboxai-a1954.appspot.com",
    messagingSenderId: "20887386769",
    appId: "1:20887386769:web:f1a48f0a21adbc110e1d30",
    measurementId: "G-PFPND6L90M"
  };
//initialize firebasen
const app = initializeApp(firebaseConfig);

//Get a Firestore instance for storage
const db = getFirestore(app);
//initiate emolutor
connectFirestoreEmulator(db, "localhost", "5000");

//create a new document in tools
export async function setDocument(reference, data, collection = "tools") {
    try {
        //Create referense for the document
    const docRef = doc(db, collection, reference);
    //Add the document in database
    await setDoc(docRef, data);
    return docRef
    } catch (e) {
        return e
    }
}

//Get sorted documents
export async function getData(reference="tools", filter="title") {
    //get snapshot of the data
    const colRef = collection(db, reference);
    const q = query(colRef, orderBy(filter));
    const snapshot = await getDocs(q);
    const documents = snapshot.docs;
    const sorted = documents.map(d => d.data());
    return sorted;
}
//Extract Data from data.json
export async function populateDB() {
    //Add each tool in tools to the database
    for (const k in tools) {
        await setDocument(k, tools[k]);
    }

}
