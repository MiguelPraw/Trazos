
let edad = window.prompt("Introduce tu edad: ");

let nodoResultado = document.querySelector("#resultado");

let diferencia = 0;

if (edad < 0) {
    nodoResultado.innerHTML = "<p>No has nacido aún</p>";
} else if (edad < 2) {
    diferencia = 2 - edad;
    nodoResultado.innerHTML = "<p>Eres un bebé, te quedan " + diferencia + " años para ser un niño</p>";
} else if (edad < 12) {
    diferencia = 12 - edad;
    nodoResultado.innerHTML = "<p>Eres un niño, te quedan " + diferencia + " años para ser un adolescente</p>";
} else if (edad < 17) {
    diferencia = 17 - edad;
    nodoResultado.innerHTML = "<p>Eres un adolescente, te quedan " + diferencia + " años para ser un adulto</p>";
} else if (edad < 65) {
    diferencia = 65 - edad;
    nodoResultado.innerHTML = "<p>Eres un adulto, te quedan " + diferencia + " años para ser un anciano</p>";
} else {
    nodoResultado.innerHTML = "<p>Eres un anciano</p>";
}
 