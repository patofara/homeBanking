let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let edad = document.getElementById("edad")
let password = document.getElementById("password")
let crear = document.getElementById("crear")

crear.addEventListener("click", () => {
crearUsuario(nombre.value, apellido.value, email.value, edad.value,password.value)
})


function crearUsuario(nombre, apellido, email, edad,password) {
    const data = {
        nombre,
        apellido,
        email,
        edad,
        password
    };
    fetch(`http://localhost:3000/users`, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {

        if(res.exito) {

            localStorage.setItem("nombre", res.nombre)
            location.href = "./bienvenida.html"
            
        } else{
            console.log(res)
        }
        })
        
    }




    //Drktt!789