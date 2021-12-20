import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"

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

const url = "https://cafe-db.herokuapp.com/users";
const fetchingDb = async() => {
    const res = await fetch(url)

    const user = await res.json()
    console.log(user)
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    name.innerHTML = user[0].name
    email.innerHTML = user[0].email;
    alpha.innerHTML = `<div class="text-decoration-none fw-bold  bg-primary rounded-circle d-flex justify-content-center align-items-center text-light" style="height:100px ;width:100px; font-size:70px" >${user[0].name[0]}</div>`

}

fetchingDb()

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user)
        const name = document.querySelector("#name")
        const email = document.querySelector("#email")
        name.textContent = user.displayName
        email.textContent = user.email
            // console.log(user.photoURL, user.displayName, user.email)
        alpha.innerHTML = `<div class="text-decoration-none fw-bold  bg-primary rounded-circle d-flex justify-content-center align-items-center text-light" style="height:100px ;width:100px; font-size:70px" >${user.displayName[0]}</div>`

        // for (let i = 0; i < alpha.length; i++) {
        // }
    } else {
        // User is signed out
        // ...
    }
});
const displayInfo = document.querySelector("#displayInfo")

const infos = `
<div class="m-auto align-self-center p-3 col-11 col-md-7 col-lg-6" style="background-color: #fff4f2;">
<h1 class="text-center"> Account details</h1>
<div  id="user-info">

<div id="alpha" class="py-3 d-flex text-center justify-content-center"> </div>
<ul class="list-group list-group-flush">

  <li class="list-group-item h5"><p>Name:</p><p > <span id=name ></span> </p></li>
  <li class="list-group-item h5"><p>E-mail:</p><p > <span id=email ></span> </p></li>
  
  

    <button class="fw-bold  btn form-control btn-danger mt-5" id="logOut">Signout</button>
</ul>
    </div>
</div>
</div>
`

displayInfo.innerHTML = infos;

const logout = document.querySelector("#logOut");

logout.addEventListener("click", e => {

    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = "/index.html"
    }).catch((error) => {
        // An error happened.
    });
})