'use strict'

let nodoCalendario = document.querySelector("#calendario");
let nodoAnio = document.querySelector("#anio");

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function pintaAnio () {

    let anio = nodoAnio.value;
    anio = Number(anio);
    console.log(anio);
    let cajaMes = "<div class='mes'>";

    for (let i = 0; i < meses.length; i++) {
        cajaMes += "<h2>" + meses[i] + "</h2>";
        if (i < meses.length) {
            cajaMes += pintaDias (cajaMes, meses[i], anio);
            cajaMes += "</div><div class ='mes'>";
        } else {
            cajaMes += pintaDias (cajaMes, meses[i], anio);
            cajaMes += "</div>";
        }
    }
    nodoCalendario.innerHTML = cajaMes;
    calculoPrimerDiaMes(anio);
    if (anio === 2022) {
        pintarHoy();
    }
}

function pintaDias (cadena, mes, anio) {
    cadena = "<div class='dias'>";
    cadena += "<span class='letra'>L</span><span class='letra'>M</span><span class='letra'>X</span><span class='letra'>J</span>"+
    "<span class='letra'>V</span><span class='letra'>S</span><span class='letra'>D</span>";
    for (let i = 1; i <= devuelvoDiasMes(mes, anio); i++) {
        cadena += "<span id='" + mes + "__" + i + "'>" + i + "</span>";
        
    }
    cadena += "</div>";
    return cadena;
}

function calculoPrimerDiaMes (anio) {
    
    for (let i = 0; i < meses.length; i++) {
        let primerDia = new Date(anio, i, 1);
        let dia = primerDia.getDay();
        let nodoDia = document.querySelector("#" + meses[i] + "__1");
        
        if (dia === 0) {
            nodoDia.style.gridColumnStart = 7;
        }   else {
            nodoDia.style.gridColumnStart = dia;
        }
    }
    
}

function pintarHoy () {
    let hoy = new Date();
    let mes = hoy.getMonth();
    hoy = hoy.getDate();
    let nodoHoy = document.querySelector("#" + meses[mes] + "__" + hoy);
    nodoHoy.style.backgroundColor = "#8e0808";
    nodoHoy.style.color = "white";
}

function devuelvoDiasMes (mes, anio) {
    switch (mes) {
        case "Enero":
            return 31;
        case "Febrero":
            if (esBisiesto(anio)) {
                return 29;
            } else {
                return 28;
            }
        case "Marzo":
            return 31;
        case "Abril":
            return 30;
        case "Mayo":
            return 31;
        case "Junio":
            return 30;
        case "Julio":
            return 31;
        case "Agosto":
            return 31;
        case "Septiembre":
            return 30;
        case "Octubre":
            return 31;
        case "Noviembre":
            return 30;
        case "Diciembre":
            return 31;
    }
}

function esBisiesto (anio) {
    if (anio % 4 === 0 && anio % 100 !== 0 || anio % 400 === 0) {
        return true;
    } else {
        return false;
    }
}