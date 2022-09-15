/* Crea una lista con los siguientes elementos:

- Tu nombre (string)
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */


/* Desafio JS */

var nombre = "Daniel";

var apellido = "Gabuardi";

var edad = 22;

var desarrolador = true;

var nacimiento = "02-10-1999";

var libroFavorito = {
    titulo: "Los complejos y el inconsciente",
    autor: "Carl G. Jung",
    fecha: "10-12-1969",
    url:"https://www.casadellibro.com/libro-los-complejos-y-el-inconsciente/9788420676173/2128624",
};

var pasatiempos = ["Dormir","Jugar al Apex","Codear ;)","Salir de fiesta"];

miActividadFavorita = function(){
    console.log("Me encanta dormir");
};

