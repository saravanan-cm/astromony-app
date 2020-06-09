import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
	apiKey: "AIzaSyDUuTEfl2ppNiJd6q0dnsuOHtcHPQrym3E",
	authDomain: "stage-vyvaha.firebaseapp.com",
	databaseURL: "https://stage-vyvaha.firebaseio.com",
	projectId: "stage-vyvaha",
	storageBucket: "stage-vyvaha.appspot.com",
	messagingSenderId: "143031758976",
	appId: "1:143031758976:web:ec66c3e1eca8f665abb665",
	measurementId: "G-LDZ77PRKE5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
// //analytics is optional for this tutoral
// firebase.analytics();

export { storage, firebase as default };
