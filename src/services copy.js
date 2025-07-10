
const URL_API_FILMS = "http://localhost:3000/films"

// ========================================
//  READ
// ========================================
const getAllFilms = async () => {
    
    const response = await fetch(URL_API_FILMS);
    
    const filmData = await response.json();
    
    return filmData;

}
getAllFilms();

// ========================================
//  PRINT
// ========================================

let filmContainer = document.getElementById("film-section");

const printFilms = async () => {
   
    const listFilms = await getAllFilms();
    
    listFilms.forEach(film => {
       
        filmContainer.innerHTML += `<div data-film-id="${film.id}">
        <h1>Titulo de la pelicula: ${film.title}</h1>
        <h2>Director de la pelicula: ${film.director}</h2>
        <p><b>Descripción de la pelicla</b>: ${film.description}</p>
        <p><b>numero de la pelicula</b>: ${film.id}</p>
        </div>`
        
    });
}
printFilms();

