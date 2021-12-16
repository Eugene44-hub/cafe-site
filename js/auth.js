const form = document.querySelector("#userSignUp");

form.addEventListener("submit", e => {
    e.preventDefault()
    const name = document.querySelector("#name").value
    const password = document.querySelector("#password").value
    const location = document.querySelector("#country").value
    const email = document.querySelector("#e-mail").value;
    (name && password && location && email) ? fetchingUser(name, password, location, email): swal({ text: "Fill all fields", icon: "error" })
        // fetchingUser(name, password, location, email)
    document.querySelector("#name").value = ""
    document.querySelector("#password").value = ""
    document.querySelector("#e-mail").value = ""

})

const fetchingUser = async(name, password, location, email) => {
    const userData = { name, password, location, email }
    const res = await fetch("http://localhost:5000/users")
    const data = await res.json();
    const checkingUser = data.filter(item => userData.email === item.email)
    const checkingUserName = data.filter(item => userData.name === item.name)
    if (checkingUser.length !== 0) {
        swal({ title: "warning", text: "User already exist", icon: "warning" })
    } else if (checkingUserName.length !== 0) {
        swal({ title: "warning", text: "username already exist change user name" })
    } else {
        swal({ title: "success", text: "Account created successfully", icon: "success" })

        setTimeout(() => {

            (async() => {
                await fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "Content-type": 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
            })();

        }, 2000);



    }

}

// fetchingUser()

// const arrObj = [{
//     name: "eugene"
// }, {
//     name: "Rups"
// }]
// const checkingUser = arrObj.filter(item => item.name === "eugene")
// console.log(checkingUser);

// if (checkingUser.length !== 0) {
//     console.log("Hello world");
// } else {
//     console.log("user doesn't exist")
// }