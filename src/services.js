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