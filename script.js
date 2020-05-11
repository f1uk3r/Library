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
    let read = document.querySelector('#read').checked

    let aBook = new Book(title, author, pages, read)
    myLibrary.push(aBook)
    console.log(myLibrary)
    insertRowInTable(aBook)
}

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault();
    addBookToLibrary();
})

function insertRowInTable(bookObject) {
    let tableBody = document.querySelector('tBody')
    let tr = document.createElement('tr')
    let titleTd = document.createElement('td')
    let titleText = document.createTextNode(bookObject.name);
    titleTd.appendChild(titleText)
    tr.appendChild(titleTd)
    let authorTd = document.createElement('td')
    let authorText = document.createTextNode(bookObject.author);
    authorTd.appendChild(authorText)
    tr.appendChild(authorTd)
    let pagesTd = document.createElement('td')
    let pagesText = document.createTextNode(bookObject.pages);
    pagesTd.appendChild(pagesText)
    tr.appendChild(pagesTd)
    let readTd = document.createElement('td')
    let readText = document.createTextNode(bookObject.read);
    readTd.appendChild(readText)
    tr.appendChild(readTd)
    let deleteTd = document.createElement('td')
    let deleteButton = document.createElement('button')
    let deleteText = document.createTextNode('Delete');
    deleteButton.appendChild(deleteText)
    deleteTd.appendChild(deleteButton)
    tr.appendChild(deleteTd);
    tableBody.appendChild(tr);
}