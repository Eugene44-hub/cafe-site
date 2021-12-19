import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { auth } from "/Users/EUGENE/Desktop/CAFE/cafe-site/firebase"

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"

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
// const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user.photoURL, user.displayName, user.email)
        const alpha = document.querySelectorAll("#alpha");
        for (let i = 0; i < alpha.length; i++) {
            alpha[i].innerHTML = `<span class="text-decoration-none">${user.displayName[0]}</span>`
        } // ...
    } else {
        // User is signed out
        // ...
    }
});

const markupHeader = `
	<nav class="navbar navbar-light navbar-expand-lg p-4" style="z-index: 1; background-color: #fff4f2;" id="top">

        <div class="container">
            <a class="navbar-brand fw-bold fs-4" href="index.html"><img src="images/logo.webp" alt=""></a>

            <button class="navbar-toggler mt-2 mt-md-0" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="fw-bold">MENU</span>  <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center text-md-start" id="navmenu">
                <ul class="navbar-nav fw-bold fs-5">
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="index.html" class="nav-link fw-bold text-dark">Home</a>
                    </li>
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="menu.html" class="nav-link fw-bold text-dark">Menu</a>
                    </li>
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="about.html" class="nav-link fw-bold text-dark">About</a>
                    </li>
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="#" class="nav-link fw-bold text-dark">Blog</a>
                    </li>
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="contact.html" class="nav-link fw-bold text-dark">Contact</a>
                    </li>
                    <li class="mb-2">  <a href="#" class="text-decoration-none d-lg-none"> <div class="rounded-circle text-light   ms-auto justify-content-center align-items-center d-flex" style="width:45px;height: 45px; background-color: lightpink; font-size:23px;" id="alpha"></div></a></li>
                </ul>

            </div>
            
      <a href="#" class="text-decoration-none d-none d-lg-block"> <div class="rounded-circle text-light  justify-content-center align-items-center d-flex" style="width:45px;height: 45px; background-color: lightpink; font-size:23px;" id="alpha"></div></a>
        
            </div>
    </nav>
    <div class="d-flex  justify-content-end " style=" background-color: #fff4f2;">
    <div class="container d-flex justify-content-end">
    <ul class="navbar-nav fw-bold  fs-5" >
   
    <li class="nav-item p-lg-0 ">
        <div class="btn-dark border-0 nav-item fw-bold rounded-pill btn btn-light  btn-lg position-relative" style="background-color: #f86011;">
            +1023682802
            <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>
        </div>
    </li>
    <li class="nav-item  mt-4 p-lg-0 text-center">
        <div class="nav-item hover-border" id="book-table">
            Book a Table
        </div>
    </li>
</ul></div>
  
    </div>
   
`;

const header = document.querySelector('.header');
header.innerHTML = markupHeader;