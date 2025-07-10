//constante del servidor local
const URL_API_FILMS = "http://localhost:3000/films"

// ========================================
//  READ
// ========================================
//creamos una funcion con una variable con un nombre que indica que va a devolver TODAS ls peliculas
const getAllFilms = async () => {
    //fetch hace la peticion a la url 
    //await espera la respuesta 
    //const response guarda la respuesta del servidor en una variable llamada response
    const response = await fetch(URL_API_FILMS);
    //convierte la respuesta del servidor a formato json y los guarda en data 
    const filmData = await response.json();
    //nos devuelve los datos
    return filmData;

}
getAllFilms();

// ========================================
//  PRINT
// ========================================
//creamos una variable 
let filmContainer = document.getElementById("film-section");
//creamos una función para mostrar las peliculas en pantalla
const printFilms = async () => {
    //llamamos a la funcion getAllFilms para que nos traiga la información
    const listFilms = await getAllFilms();
    //console.log("lista de peliculas",listFilms);
    //recorres cada pelicula de la lista y ejecuta el codigo que ponga a continuación
    listFilms.forEach(film => {
        //console.log("titulo de la pelicula", film.title)
        //console.log("director de la pelicula",film.director)
        //console.log("descripcion de la pelicula",film.description)

        filmContainer.innerHTML += `<div data-film-id="${film.id}">
        <h1>Titulo de la pelicula: ${film.title}</h1>
        <h2>Director de la pelicula: ${film.director}</h2>
        <p><b>Descripción de la pelicla</b>: ${film.description}</p>
        <p><b>numero de la pelicula</b>: ${film.id}</p>
        </div>`

    });
}
printFilms();
// ========================================
//  CREATE
// ========================================
//creamos una funcion para añadir peliculas nuevas: const createFilm
//newFilm: contiene la información de la pelicula nueva
const createFilm = async (newFilm) => {
    //hace una petición a la misma URL, pero con configuracion especial para enviar datos
    //¿Por qué es diferente a la función READ? 
    //En READ solo pedíamos datos (GET)
    //En CREATE vamos a enviar datos nuevos (POST)
    const response = await fetch(URL_API_FILMS, {
        //le dice al servidor que queremos ENVIAR datos nuevos
        //POST: es el tipo de petición HTTP para crear/añadir cosas nuevas
        //POST(toma estos datos nuevos)
        method: "POST",
        //abre una sección para configurar como enviar los datos
        //headers: son como etiquetas que le dicen al servidor que tipo de datos le enviamos
        headers: {
         //Content-Type le dice al servidor que formto tienen los datos
         //application/json" = Especifica que los datos están en formato JSON
            "Content-Type": "application/json"
        },
        //envia los datos de la pelicula nueva convertidos a formato JSON
        //body: = Aquí van los datos que queremos enviar al servidor
        //JSON.stringify(newFilm) = Convierte el objeto newFilm a formato JSON (texto)
        //newFilm = Los datos de la película que recibimos como parámetro
        body: JSON.stringify(newFilm)

    });
    //response.json() = Convierte la respuesta del servidor a formato JavaScript
    //await = Espera a que termine la conversión
    //const createdFilm = Guarda la película creada (con el ID que le asignó el servidor)
    const createdFilm = await response.json();
    //"Devuelve la película recién creada con toda su información
    return createdFilm;
}
