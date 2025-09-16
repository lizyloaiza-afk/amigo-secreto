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
     mostrarLista() 
    
    

    //Limpiar campo de entrada
    input.value = "" ;
};

function mostrarLista() {
    //1. Obtener el elemento de la lista
        const lista = document.getElementById("listaAmigos");

        //2. Limpiar la lista
        lista.innerHTML = "";

        //3. Iterar sobre el arreglo
        for (let i = 0; i < nombres.length; i++) {
        const nombre = nombres[i];

       // 4. Crear y agregar elemento <li>
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
        }
}
//Función Sortear Amigo
function sortearAmigo() {
  const inputs = document.querySelectorAll(".nombre");
  const nombres = [];

  inputs.forEach(input => {
    if (input.value.trim() !== "") {
      nombres.push(input.value.trim());
    }
  });

  //Validar que haya nombres disponibles
  if (nombres.length === 0) {
    document.getElementById("resultado").innerHTML = "No hay participantes disponibles para el sorteo.";
    return;
  }

  //Generar índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indiceAleatorio];


  //Mostrar resultado
  document.getElementById("resultado").innerHTML = `🎉 Tu amigo secreto es: <strong>${nombreSorteado}</strong>`;
}
