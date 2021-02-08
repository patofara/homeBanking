let email = document.getElementById("email")
let password = document.getElementById("password")
let login = document.getElementById("login")
let incorrecto = document.getElementById("incorrecto")
let autocompletado;

login.addEventListener("click", ()=> {
  getLogin(email.value, password.value )

})

function getLogin(email,password) {
    var data = {
        email,
        password
    }
    fetch(`http://localhost:3000/login`, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        if(res.exito) {
            localStorage.setItem("nombre", res.exito.nombreUser)
            location.href = "./bienvenida.html"
        }
        else{
            incorrecto.removeAttribute("hidden")
            incorrecto.innerHTML = "Invalid email or user"
        }
    })
}






