import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAIrH_JRsra4gBwICamSj78HbxgS2JBUpU",
  authDomain: "react-firebase-marioplan-d147b.firebaseapp.com",
  databaseURL: "https://react-firebase-marioplan-d147b.firebaseio.com",
  projectId: "react-firebase-marioplan-d147b",
  storageBucket: "react-firebase-marioplan-d147b.appspot.com",
  messagingSenderId: "1002003169165",
  appId: "1:1002003169165:web:d0ffa7380afd8aa32d47c4",
  measurementId: "G-5B4LSYBMZ5",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();

export default firebase;




// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAIrH_JRsra4gBwICamSj78HbxgS2JBUpU",
//     authDomain: "react-firebase-marioplan-d147b.firebaseapp.com",
//     databaseURL: "https://react-firebase-marioplan-d147b.firebaseio.com",
//     projectId: "react-firebase-marioplan-d147b",
//     storageBucket: "react-firebase-marioplan-d147b.appspot.com",
//     messagingSenderId: "1002003169165",
//     appId: "1:1002003169165:web:d0ffa7380afd8aa32d47c4",
//     measurementId: "G-5B4LSYBMZ5"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>