
function saludo () {
    console.log("Hola");
}

let despedida = () => {
    console.log("Adios")
}

// module.exports = saludo;

module.exports = {
    saludo,
    despedida
}