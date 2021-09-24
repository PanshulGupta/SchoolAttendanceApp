import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw1oaARgUnumvENTo7CghWQBAhUa2Gla4",
  authDomain: "student-attendance-app-7138b.firebaseapp.com",
  databaseURL: "https://student-attendance-app-7138b-default-rtdb.firebaseio.com",
  projectId: "student-attendance-app-7138b",
  storageBucket: "student-attendance-app-7138b.appspot.com",
  messagingSenderId: "894732703834",
  appId: "1:894732703834:web:91a534efea168105712063"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()