export function creaImagen() {
    // Función que crea un elemento imagen, completa sus clases y el src (puedes usar la imagen adjunta u otra)
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = "../imagenes/elcano.jpg";
    nuevaImagen.classList.add('img-fluid');
    
    //Para que la altura se adapte al contenedor D
    if(zona.value == 'D'){
        nuevaImagen.style.height = '12rem';
    }
   
    // Devuelve el elemento imagen
    return nuevaImagen;
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
    const table = document.createElement("table");
   
    arrayHuracanes.forEach(function(filas){
        //aqui se controlaran las filas
        const tr = document.createElement("tr");
        table.append(tr);

        //Aqui se inserta las celdas de 'cat'
       const tdCat = document.createElement("td");
       tdCat.textContent = "cat:" + filas.cat;
       tr.appendChild(tdCat);

       //Aqui se inserta las celdas de 'vel'
       const tdVel = document.createElement("td");
       tdVel.textContent = "    vel: " + filas.vel;
       tr.appendChild(tdVel);
    });

    return table;

}

export function creaParrafo() {
    // Crea un párrafo con texto genérico
    const parrafo = document.createElement("p");
    parrafo.innerHTML = "parrafo";
    return parrafo;
}


export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    // Crea una lista con este array y la devuelve

    const estructuraLista = document.createElement("ul");
    lista.className = "list-group";


    lista.forEach(element => {
        const elemento = document.createElement("li");
        elemento.className = "list-group-item";
        elemento.innerText = element;
        estructuraLista.appendChild(elemento);
    });

    return estructuraLista;

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