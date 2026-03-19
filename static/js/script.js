console.log("Conectado a JS...");
let username = localStorage.getItem("username") || "";
const usernameSpan = document.getElementById("username");
const botonSesion = document.getElementById("boton-sesion");

document.addEventListener('DOMContentLoaded', () => {
    usernameSpan.textContent = username;
});

function cerrarSesion() {
    let confirmacion = confirm("¿Seguro que quieres cerrar sesión?");

    if (confirmacion == true) {
        localStorage.setItem("username", "");
        username = "";
        usernameSpan.textContent = "";
        botonSesion.classList.remove("btn-danger");
        botonSesion.classList.add("btn-success");
        botonSesion.textContent = "Iniciar sesión";
        botonSesion.onclick = iniciarSesion;
    };
};

function iniciarSesion() {
    let usernameTempVer = prompt("Ingresa tu nombre de usuario");
    usernameTempVer = usernameTempVer.trim();
    if (usernameTempVer == "") {
        alert("El nombre de usuario no puede estar vacío");
        location.reload();
    } else {
        username = usernameTempVer;
        localStorage.setItem("username", usernameTempVer)
        botonSesion.classList.remove("btn-success");
        botonSesion.classList.add("btn-danger");
        botonSesion.textContent = "Cerrar  sesión";
        botonSesion.onclick = cerrarSesion;
    };
    usernameSpan.textContent = username;
};