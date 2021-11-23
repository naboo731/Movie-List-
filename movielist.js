document.querySelector('form').addEventListener('submit', addMovie)
const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value 

    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)

    document.querySelector('ul').appendChild(movie)
    movie.appendChild(deleteBtn)
    inputField.value = ''
}


function deleteMovie(event) {
    console.log(message.textContent)
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
    
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true){
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = "Movie Added Back!"
    }
}

