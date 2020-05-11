let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').value

    let aBook = new Book(title, author, pages, read)
    myLibrary.push(aBook)
    

}

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault();
    addBookToLibrary();
})

