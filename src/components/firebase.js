import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyATtDUFn9RQEDnx9oo1qKfLg4SQueuPBmE",
  authDomain: "Runnerly.firebaseapp.com",
  projectId: "runnerly-81cb3",
  // ...
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Ekspor objek autentikasi Firebase
export const auth = firebase.auth();
export default firebase;
export { firebaseConfig };
