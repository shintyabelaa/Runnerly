import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATtDUFn9RQEDnx9oo1qKfLg4SQueuPBmE",
  authDomain: "Runnerly.firebaseapp.com",
  projectId: "runnerly-81cb3",
  // ...
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Ekspor objek autentikasi Firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createBeratBadanDocument = async (userId, level, data) => {
  const beratBadanRef = firestore.collection(`beratBadan/${level}`);
  await beratBadanRef.doc(userId).set(data);
};

export const createJarakLariDocument = async (userId, level, data) => {
  const jarakLariRef = firestore.collection(`jarakLari/${level}`);
  await jarakLariRef.doc(userId).set(data);
};

export const createReportDocument = async (userId, level, data) => {
  const reportRef = firestore.collection(`report/${level}`);
  await reportRef.doc(userId).set(data);
};

export const googleMapsApiKey = "AIzaSyDx1UxIrd-fxKMd3-CB4q8MuYaRioG2X_A";

export default firebase;
export { firebaseConfig};
