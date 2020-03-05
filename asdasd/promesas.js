//

// function traerFech() {
//     return setTimeout(function () {
//         return new Date();
//     }, 2000);
// }

// var fechaActual = traerFech();
// console.log("La fecha es: " + fechaActual)

// arreglado con callback

// function traerFecha(callback) {
//     return setTimeout(function () {
//         var nuevaFecha = new Date();
//         callback(nuevaFecha)
//     }, 2000);
// }

// traerFecha( function (fechaActual) {
//     console.log("La fecha es: " + fechaActual);
// });

// Promesas

function traerFechas() {
    return new Promise((resolve, reject) => {
        setTimeout( function () {
            var consultaExitosa = Math.random() >= 0.5;
            consultaExitosa ? resolve(new Date()) : reject("Error");
        })
    })
}
traerFechas()
    .then(fechaActual => traerFechas())
    .then(fechaActual => {
        console.log('La fecha actual es : ' + fechaActual);
        return true;
    })
    .catch(error => console.log("Hubo un error: " + error))