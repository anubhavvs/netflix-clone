import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCEqPQf1y2CE8iynAO-qKVePZRkMBwM-cg",
    authDomain: "netflix-clone-c34e9.firebaseapp.com",
    databaseURL: "https://netflix-clone-c34e9.firebaseio.com",
    projectId: "netflix-clone-c34e9",
    storageBucket: "netflix-clone-c34e9.appspot.com",
    messagingSenderId: "504765751145",
    appId: "1:504765751145:web:39548970381423923627f8"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };