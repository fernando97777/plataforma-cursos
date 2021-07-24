const login = document.getElementById('boton');

login.addEventListener('click', crearCuenta);

function crearCuenta(e){
    e.preventDefault();
    const correo = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;

    auth
        .createUserWithEmailAndPassword(correo,contraseña)
        .then(userCredential => {
            Swal.fire({
                title:"Usuario Creado!",
                icon:'success',
                timer: 2000,
                showConfirmButton:false
            })
            setTimeout("principal()",2000);
        });
}

function principal(){
    window.location.href = "index.html";
}