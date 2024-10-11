// Añadir las importaciones de las funciones que crean la imagen, la tabla, el párrafo y l lista
import { creaImagen, creaParrafo, creaLista } from "./funciones.js";


// Variables para guardar la zona y la entrada
let zona = '';
let entrada = '';


// Esta función guarda la zona seleccionada
function seleZona() {
    // Selecciona la zona del select elegir zona y lo guarda
    zona = document.getElementById('zona').value;

    // Si hay entrada, habilito el botón aplicar
    if(entrada != ""){
        const boton = document.getElementById("aplicar");
        //enable
    }
}

// Esta función guarda la entrada seleccionada
function seleInput() {
    // Selecciona la entrada del select elegir entrada y la guarda
    entrada = document.getElementById("entrada").value;

    // Si hay zona elegida, hablitar el botón aplicar
    if(zona != ""){
        const boton = document.getElementById("aplicar");
        //enable
    }
}

/* La función enviar llama a la función importada según 
la entrada seleccionada y lo coloca en la zona seleccionada. */
function enviar() {
    // Limpiar la zona seleccionada (para que no se coloquen más de una entrada en la zona)

    /* comprueba cual es la zona seleccionada y ejecuta la función de creación
    correspondiente (switch)*/

    switch(entrada){
        case ("img"): {
            document.getElementById(zona).append(creaImagen());
        }

        case ("table"):{

        }

        case ("list"):{
            document.getElementById(zona).append(creaLista());
        }

        case ("p"):{
            document.getElementById(zona).append(creaParrafo());
        }
            
    }
    
}

function limpiarContenedores(){
    const boton = document.getElementById('limpiar');
    boton.addEventListener('click', function(){
        limpiar();
    })
}

// Asignación de funciones al objeto window
window.seleZona = seleZona;
window.seleInput = seleInput;
window.enviar = enviar;
