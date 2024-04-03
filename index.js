document.getElementById('btnScroll').addEventListener('click', function() {
    // Encuentra la posición de la siguiente sección
    var posicionSeccion = document.getElementById('about').offsetTop;

    // Desplaza a esa posición
    window.scrollTo({
        top: posicionSeccion,
        behavior: 'smooth' // Esto asegura un desplazamiento suave
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#navbar button').forEach(boton => {
        boton.addEventListener('click', function() {
            var seccionID = this.getAttribute('data-seccion'); // Obtiene el id de la sección
            var seccion = document.querySelector(seccionID); // Selecciona la sección correspondiente
            
            if(seccion !== null) { // Verifica que se encontró la sección
                window.scrollTo({
                    top: seccion.offsetTop, // Obtiene la posición de la sección
                    behavior: 'smooth' // Implementa un desplazamiento suave
                });
            } else {
                console.error('No se encontró la sección con ID:', seccionID);
            }
        });
    });
});

