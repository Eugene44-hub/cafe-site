const userLogin = document.querySelector("#userLogin")

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

// console.log(fetchingData)