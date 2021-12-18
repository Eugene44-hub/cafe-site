// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKOFyOF1eFEUTLmzzfhO_7NpVXz6lMCFw",
    authDomain: "cafe-auth-536ca.firebaseapp.com",
    projectId: "cafe-auth-536ca",
    storageBucket: "cafe-auth-536ca.appspot.com",
    messagingSenderId: "723872785332",
    appId: "1:723872785332:web:d99eca19538d9dd47b88e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleBtn = document.querySelector("#gmailSignIn")
googleBtn.addEventListener("click", e => {
    const provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // provider.setCustomParameters({
    //     'login_hint': 'user@example.com'
    // })
    const auth = getAuth();
    // auth.languageCode = 'it';

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
})