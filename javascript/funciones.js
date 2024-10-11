export function creaImagen() {
    // Función que crea un elemento imagen, completa sus clases y el src (puedes usar la imagen adjunta u otra)
    const crearImagen = document.createElement("img");
    creaImagen.src = "../imagenes/elcano.jpg";

    // Devuelve el elemento imagen
    return creaImagen;
}

export function creaTabla() {
    const arrayHuracanes = [
        { cat: 1, vel: '120-153' },
        { cat: 2, vel: '154-177' },
        { cat: 3, vel: '178-209' },
        { cat: 4, vel: '210-249' },
        { cat: 5, vel: 'Más de 250' },
    ]
    // Crea una tabla con los datos de este array
}

export function creaParrafo(zona) {
    // Crea un párrafo con texto genérico
    const parrafo = document.createElement("p");
    parrafo.innerHTML = "parrafo";
    zona.document.appendChild(parrafo);
}

export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    // Crea una lista con este array y la devuelve

    const estructuraLista = document.createElement("ul");
    lista.className = "list-group";
    zona.document.appendChild(estructuraLista);

    lista.forEach(element => {
        const elemento = document.createElement("li");
        elemento.className = "list-group-item";
        elemento.innerText = element;
        estructuraLista.document.appendChild(elemento);
    });

}

export function limpiar() {
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const C = document.getElementById('C');
    const D = document.getElementById('D');

    A.innerHTML = " ";
    B.innerHTML = " ";
    C.innerHTML = " ";
    D.innerHTML = " ";
}