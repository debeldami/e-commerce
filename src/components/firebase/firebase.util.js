import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdCruRK1GvUAlc0NTLxvKcNtkXbR9Ne3s",
    authDomain: "dblcrowndb.firebaseapp.com",
    databaseURL: "https://dblcrowndb.firebaseio.com",
    projectId: "dblcrowndb",
    storageBucket: "dblcrowndb.appspot.com",
    messagingSenderId: "288895968061",
    appId: "1:288895968061:web:90719754cf1a743e2b5b54",
    measurementId: "G-5Y32PKC9V8"
};

export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const { email } = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(`error creating user ${error}`);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDoc = async (collectionKeys, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKeys)
    console.log(collectionRef)

    const batch = firestore.batch();

    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit()
}

export const conversionSelectionSnapShotToMap = (collection) => {

    const transfromedCollection = collection.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transfromedCollection.reduce((acc, coll) => {
        acc[coll.title.toLowerCase()] = coll
        return acc;
    }, {})
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

