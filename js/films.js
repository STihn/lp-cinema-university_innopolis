// Table

const ganres = ['фантастика', 'боевик', 'приключения', 'фэнтези', 'драма', 'комедия', 'мультфильм']

const films = [
    ['10:00', 'Человек-паук', '0/1/2'],
    ['12:00', 'Собачья жизнь 2', '3/4/5'],
    ['14:00', 'История игрушек 4', '6/3/5'],
    ['16:00', 'Люди в чёрном: Интернэшнл', '0/1/5']
]

for (let i = 0; i < films.length; i++) {
    // get indexes 
    const ganres_indexes  = films[i][2].split('/');
    let film_ganre = ''

    for (let j = 0; j < ganres_indexes.length; j++) {
        film_ganre += ganres[ganres_indexes[j]]
            if (j < ganres_indexes.length-1) {
                film_ganre += ', '
            }
    }
    
    // get the elements
    const element_start_film = document.getElementById('start_film_'+(i+1))
    const element_name_film = document.getElementById('name_film_'+(i+1))
    const element_ganre_film = document.getElementById('ganar_film_'+(i+1))
    
    // add values
    element_start_film.innerHTML = films[i][0]
    element_name_film.innerHTML = films[i][1]
    element_ganre_film.innerHTML = film_ganre
}