//variables globales
let pagina = 1;

document.addEventListener('DOMContentLoaded',function(){
    inciarApp();
})

function inciarApp(){
    //mostrarSeccion
    mostrarSeccion();
    //cambiar seccion
    cambiarSeccion();
}
//funciones
function mostrarSeccion(){
    const seccionActual = document.querySelector(`#paso-${pagina}`);
    seccionActual.classList.add('mostrar-seccion'); 
}

function cambiarSeccion(){
    const enlaces = document.querySelectorAll('.caja1 a');

    enlaces.forEach(enlace =>{
        enlace.addEventListener('click', e =>{
            e.preventDefault();
            pagina = parseInt(e.target.dataset.paso)

            //eliminar mostrar-seccion
            document.querySelector('.mostrar-seccion').classList.remove('mostrar-seccion');
            
            const seccion = document.querySelector(`#paso-${pagina}`)
            seccion.classList.add('mostrar-seccion');
        })
    })
}

//cerrar Seccion
const cerrar = document.getElementById('seccion');
cerrar.addEventListener('click', finalizada);

function finalizada(e){
    e.preventDefault();
    auth.signOut().then(() =>{
        messageExit();
        setTimeout("redireccionar()",2000);
    })
}

function redireccionar() {
    window.location.href = "index.html";
}

function messageExit() {
    Swal.fire({
    title: "Cerran Seccion.....",
    timer: 2000,
    showConfirmButton: false
    })
}



