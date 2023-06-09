import { firebase } from './firebase'; // Import modul Firebase yang telah diinisialisasi

// Fungsi untuk melakukan login dengan email dan password
export const loginWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

// Fungsi untuk melakukan sign up dengan email dan password
export const signUpWithEmailAndPassword = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

// Fungsi untuk logout
export const logout = () => {
  return firebase.auth().signOut();
};

// Fungsi untuk mendapatkan informasi pengguna yang sedang login
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
