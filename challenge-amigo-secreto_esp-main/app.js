// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Validar la entrada

    //Validación: campo vacío
    if (nombre ==="") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    //Validación: nombre duplicado
    if (nombres.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }
    //Agregar al array
    nombres.push(nombre);

    //Mostrar en pantalla
    mostrarlista();

    //Limpiar campo de entrada
    input.value = "" ;

}