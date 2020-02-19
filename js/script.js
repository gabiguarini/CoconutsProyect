var lorem = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis placerat pretium. ",
"Donec pellentesque felis non dignissim mattis. Morbi in orci non lorem gravida auctor.",
"Fusce placerat, lacus ac sodales dapibus, lectus ex aliquet dui, nec gravida justo purus non diam. ",
"Nullam imperdiet aliquam massa a aliquam. Morbi eget rutrum odio. Morbi in egestas risus. ",
"Ut et felis sit amet mi maximus viverra. Nullam dictum dolor nec imperdiet lacinia. ",
"Duis accumsan arcu a risus condimentum lacinia. Mauris aliquet lorem sit amet lacus vehicula, non tincidunt arcu venenatis. ",
"Sed imperdiet sodales neque, sed tempus nulla pulvinar porta. Nam mollis consequat tortor ultricies lobortis. ",
"Nunc vestibulum sit amet tortor sit amet dapibus. Vestibulum feugiat metus urna, in hendrerit tortor dictum nec. ",
"Praesent tincidunt mi quis euismod viverra. Suspendisse aliquam turpis ut turpis efficitur suscipit. ",
"Pellentesque tempor augue vitae diam dapibus consectetur. ",
"Sed mattis tortor nec mauris tristique, nec aliquet ante posuere. Proin enim mauris, auctor ut elit sed, sagittis dapibus lectus. ",
"Vestibulum scelerisque, massa vitae malesuada vestibulum, ante est sollicitudin nisi, volutpat tincidunt velit diam at ante. ",
"Phasellus interdum, ipsum vitae mollis pulvinar, lectus risus pulvinar enim, ut porttitor nisl purus a erat. ",
"Duis tincidunt, sapien convallis pellentesque sollicitudin, nunc mi porttitor augue, et convallis metus odio sit amet metus. ",
"Maecenas quis mauris tellus. Aenean fringilla mi rutrum nunc mollis ornare. Integer sed felis metus. Suspendisse non imperdiet quam, ut posuere felis. ",
"Sed quis congue enim, non luctus justo. Aliquam erat volutpat. Curabitur gravida ipsum diam, vel luctus nisi hendrerit ut. Vivamus interdum non velit ac feugiat. ",
"Sed pretium ut nibh lobortis porta. Vivamus nunc nisi, mattis eu facilisis vitae, suscipit quis nibh. Vivamus elementum mi dignissim sollicitudin dignissim. ",
"Donec et pellentesque urna. Maecenas suscipit dolor nec lacus volutpat aliquet. Donec ut magna non nunc imperdiet porttitor a sed augue. ",
"Cras in fringilla elit. Aliquam est felis, luctus ut odio eu, porta fermentum tellus. Vestibulum eget enim est. ",
"Vestibulum lacinia est nec urna fermentum, ultricies porta nisi lacinia. Integer faucibus id odio sit amet ultrices. Nullam ac augue tellus. ",
"Etiam sed ex sed lorem pellentesque varius. Phasellus nec ipsum vitae augue placerat pulvinar. Sed vitae ultricies nunc. Vestibulum quis malesuada sapien, sed faucibus lacus. ",
"Cras in libero at odio pulvinar pretium vitae nec sapien. Nullam rutrum nulla sit amet velit aliquam, et laoreet felis lacinia. ",
"Curabitur venenatis, risus vitae hendrerit tempor, nisi metus finibus nibh, sit amet venenatis purus ante vel est. ",
"Curabitur facilisis dui id nulla maximus, ut tristique purus ultrices. ",
"Proin et sodales neque. Cras imperdiet cursus quam, vel ultricies augue porttitor ut. In eu sapien et mauris sodales posuere. ",
"Suspendisse auctor maximus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus fringilla massa ac ultrices lobortis. ",
"Donec interdum viverra risus. Donec orci ipsum, rutrum sit amet sapien a, pulvinar tincidunt tellus."]

document.getElementById("btn--generar").addEventListener("click", funcionRecopada)

function funcionRecopada () 
{
    var select = document.querySelector('input[name=input--tipo]:checked').value;
    var valor = document.getElementById("input--cantidad").value;
    console.log(select);
    var resultado;
    switch (select) {
        case 1:
            resultado = loremPalabras(valor);
            document.getElementById("texto--resultado").innerHTML = resultado
            break;
        case "2":
            resultado = loremParrafos(valor);
            document.getElementById("texto--resultado").innerHTML = resultado
            break;
        case "3":
            resultado = loremListas(valor);
            document.getElementById("texto--resultado").innerHTML = resultado
            break;
    
        default:
            resultado = "Nn";
    }
    
}


function loremRandom() {
    var i = Math.floor(Math.random() * lorem.length);
    return lorem[i];
}

function loremPalabras(cantidad) {
    var resultado = "";
    var termino = false;
    while (termino == false) {
        resultado += loremRandom();
        var arrayDePalabras = resultado.split(" ");
        if(arrayDePalabras.length > cantidad)
        {
            arrayDePalabras.length = cantidad;
            resultado = arrayDePalabras.join(" ");
            termino = true;
        }
    }
}

function loremParrafos(cantidad) {
    
}
function loremListas(cantidad) {
    
}
    /*
    var frase = document.getElementById("texto--frase").textContent = "Frase: " + frases[i].frase;
    var autor = document.getElementById("texto--autor").textContent = "Autor: " +frases[i].autor;
    console.log(frase);
    console.log(autor);
    */
