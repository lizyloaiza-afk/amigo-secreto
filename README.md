# amigo-secreto
Aplicación web para organizar sorteos de amigo secreto con HTML, CSS y JavaScript

Este es mi proyecto de Amigo Secreto, desarrollado en JavaScript como parte de mi proceso de aprendizaje en programación. La idea es sencilla: asignar de manera aleatoria a cada participante su amigo secreto, evitando repeticiones y autoasignaciones.

Instalación:
Copia este repositorio:
git clone https://github.com/miusuario/challenge-amigo-secreto_esp-main.git

Entra en la carpeta del proyecto:
cd challenge-amigo-secreto_esp-main

Dependencias:
Node.js (versión 14 o superior).
No requiere librerías externas adicionales.

Ejecución:
Asegúrate de estar en la carpeta raíz del proyecto.
Ejecuta el archivo principal:
node index.js
Verás en la terminal la asignación de cada participante.

Ejemplo de salida:
{
  "Ana": "Luis",
  "Luis": "María",
  "María": "Pedro",
  "Pedro": "Ana"
}

Posibles problemas y soluciones:
Error: node no reconocido → Instala Node.js y verifica que esté en tu PATH.

Asignaciones repetidas o autoasignaciones → El algoritmo está diseñado para reintentar hasta generar un resultado válido; vuelve a ejecutar.

Página en GitHub Pages no carga → Confirma que index.html esté en la raíz del repositorio y que GitHub Pages esté activado en Settings → Pages.

Demo en línea:

Sobre mí:
Este proyecto me permitió practicar lógica en JavaScript, manejo de Git y GitHub, y la publicación de proyectos en GitHub Pages. Más allá de cumplir con el reto, me ayudó a reforzar mi forma modular de trabajar y a documentar de manera clara cada paso.

Nueva funcionalidad- Agregar nombres con validación.
<img width="1902" height="913" alt="Captura de pantalla 2025-09-13 220503" src="https://github.com/user-attachments/assets/fcc05bc3-92fc-494d-85a5-56e5c10c56eb" />
<img width="1903" height="916" alt="Captura de pantalla 2025-09-13 220403" src="https://github.com/user-attachments/assets/38f92eef-30d7-4ddf-b943-4ce82727f68c" />

Nueva funcionalidad- Muestra lista de nombres en la pantalla
<img width="1895" height="906" alt="Captura de pantalla 2025-09-13 223830" src="https://github.com/user-attachments/assets/23c383af-6952-485b-a8c1-1710036df0da" />

Nueva funcionalidad- sortea amigo secreto y muestra resultado en pantalla
<img width="1876" height="904" alt="Captura de pantalla 2025-09-16 214848" src="https://github.com/user-attachments/assets/cf1eadaf-9b46-45f7-9936-8cf12c11f76d" />
