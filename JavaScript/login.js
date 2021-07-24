const acceder = document.querySelector('#login-form')


acceder.addEventListener('submit', async e =>{
    e.preventDefault();
    try {
        const {email,contraseña} = infoLogin();
        await login(email,contraseña);
        setTimeout("redireccionar()",4000);
        messageIngreso();
    } catch (error) {
        messageError();
    }
});

// funciones
function infoLogin(){
    const email = document.getElementById('correos').value;
    const contraseña = document.getElementById('contras').value;
    return{email,contraseña};
}

async function login(email,contraseña){
    return await auth.signInWithEmailAndPassword(email, contraseña);
}

function redireccionar() {
    window.location.href = "cursos.html";
}

function messageIngreso() {
    Swal.fire({
    title: "Ingresando.....",
    timer: 4000,
    showConfirmButton: false
    })
}

function messageError(){
    Swal.fire({
        title:"Usuario o Contraseña Incorreacto",
        timer: 2000,
        icon: "error",
        showConfirmButton: false
    })
}



