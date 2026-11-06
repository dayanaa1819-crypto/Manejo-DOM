// 1. Selección de elementos del DOM
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const cuerpoTabla = document.getElementById("tabla-registros");

// Variable de estado para controlar los clics
let likes = 0;

// 2. Escuchar el evento 'click' en el botón
boton.addEventListener("click", () => {
    // Incrementar el contador
    likes++;

    // Actualizar el DOM en tiempo real
    textoContador.textContent = likes;

    // Obtener la hora actual del sistema
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaFormateada = `${horas}:${minutos}:${segundos}`;

    // Crear la fila <tr> y celdas <td> dinámicamente
    const nuevaFila = document.createElement("tr");

    const celdaClic = document.createElement("td");
    celdaClic.textContent = likes;

    const celdaHora = document.createElement("td");
    celdaHora.textContent = horaFormateada;

    // Insertar celdas dentro de la fila
    nuevaFila.appendChild(celdaClic);
    nuevaFila.appendChild(celdaHora);

    // Agregar la nueva fila al inicio del tbody (prepend)
    cuerpoTabla.prepend(nuevaFila);
});