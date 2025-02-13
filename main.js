

var h1 = document.querySelector("#mensaje");
  
var t1 = ""
var t2 = ""
var t3 = ""
var t4 = ""
var t5 = ""
var time = 0
function enviarMensaje(texto) {
    t1 = "Hoy me gustaria estar a tu lado y darte una rosita por bonita";
    t2 = "Pero mientras no te veo te mando esto pa que veas que te quiero"
    t3 = "Quiero jalarte los cachetes 😫"
    t4 = "bueno intenta sobrevivir sin mi"
    t5 = "y cuando me veas ya seras feli ❤"
}

     window.onload = function() {
    document.body.classList.remove("container");
        var parametros = obtenerParametrosURL();
        var nombre = parametros.mom
        enviarMensaje(nombre)
        textoslista = [t1,t2,t3,t4,t5]
        var textos = textoslista.filter(function(elemento) {
            // La función de filtrado devuelve true si el elemento no está vacío, de lo contrario, devuelve false
            return elemento !== "";
        });


        textos.forEach(function(texto) {
            setTimeout(() => {
                reemplazarTexto(texto)
              }, time);
            time += 8000
        // Llamamos a la función reemplazarTexto después de 7 segundos



        });
    }

    function obtenerParametrosURL() {
        var parametros = {};
        var url = window.location.search.substring(1);
        var partes = url.split('&');
        for (var i = 0; i < partes.length; i++) {
            var parametro = partes[i].split('=');
            var nombre = decodeURIComponent(parametro[0]);
            var valor = decodeURIComponent(parametro[1]);
            parametros[nombre] = valor;
        }
        return parametros;
    }
    
    function reemplazarTexto(nuevotexto) {
        h1.textContent = nuevotexto;   
    }
// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro (en este caso lo llamaremos 'name')
const nameParam = urlParams.get('name');

// Verificar si existe el parámetro y reemplazar "ANGIE" por el valor del parámetro
if (nameParam) {
    const nameDiv = document.getElementById('name');
    
    // Limpiar el contenido actual
    nameDiv.innerHTML = '';

    // Agregar cada letra del nombre como un span
    for (let letter of nameParam.toUpperCase()) {
        const span = document.createElement('span');
        span.textContent = letter;
        nameDiv.appendChild(span);
    }

    // Agregar el signo de exclamación
    const exclamation = document.createElement('span');
    exclamation.textContent = '!';
    nameDiv.appendChild(exclamation);
}
