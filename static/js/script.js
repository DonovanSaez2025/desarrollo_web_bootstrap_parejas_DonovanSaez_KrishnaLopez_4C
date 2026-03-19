console.log("Conectado a JS...");
let username = localStorage.getItem("username") || "";
const usernameSpan = document.getElementById("username");

document.addEventListener('DOMContentLoaded', () => {
    if (username == "") {
        let usernameTempVer = prompt("Ingresa tu nombre de usuario");
        usernameTempVer = usernameTempVer.trim();
        if (usernameTempVer == "") {
            alert("El nombre de usuario no puede estar vacío");
            window.location.href = "/index.html";
        } else {
            username = usernameTempVer;
            localStorage.setItem("username", usernameTempVer)
        };
    };
    usernameSpan.textContent = username;
});

function cerrarSesionConfirmacion(confirmacion) {
    return confirm("¿Seguro que quieres cerrar sesión?");
};

function cerrarSesion() {
    let confirmacion = cerrarSesionConfirmacion(confirmacion) {
        
    }
}