import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"


const firebaseConfig = {
    apiKey: "AIzaSyAKOFyOF1eFEUTLmzzfhO_7NpVXz6lMCFw",
    authDomain: "cafe-auth-536ca.firebaseapp.com",
    projectId: "cafe-auth-536ca",
    storageBucket: "cafe-auth-536ca.appspot.com",
    messagingSenderId: "723872785332",
    appId: "1:723872785332:web:d99eca19538d9dd47b88e1"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider();

const userLogin = document.querySelector("#userLogin")

const googleBtn = document.querySelector("#gmailSignIn");
const facebookBtn = document.querySelector("#fbSignIn");
userLogin.addEventListener("submit", e => {
    e.preventDefault()
    const userEmail = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    fetchingData()
        .then(res => {
            const userData = res;
            // console.log(res)
            const userInfo = userData.filter(user => user.email === userEmail && user.password === password)
            userInfo.length !== 0 ? window.location.href = "/homepage.html" : swal({ icon: "error", text: "input correct details" })
        })

    // userinfo.filter()
})
const url = "https://cafe-db.herokuapp.com/users"

const fetchingData = async() => {
    const res = await fetch(url)

    const userinfo = await res.json()

    return userinfo
}


googleBtn.addEventListener('click', e => {
    signInWithPopup(auth, provider)
        .then((result) => {

            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user.displayName);
            window.location.href = "/homepage.html"

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
    // window.location.href = "/homepage.html"
})

facebookBtn.addEventListener('click', e => {
    signInWithPopup(auth, fbprovider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            window.location.href = "/homepage.html"

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });


})



// console.log(fetchingData)