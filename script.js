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
    let tableBody = document.querySelector('tBody');
    tableBody.innerHTML = ''
    render()
}

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault();
    addBookToLibrary();
})

function render() {
    let tableBody = document.querySelector('tBody');
    for (let i = 0; i<myLibrary.length; i++) {
        let row = document.createElement('tr');

        let titleTd = document.createElement('td');
        let titleText = document.createTextNode(myLibrary[i].name);
        titleTd.appendChild(titleText);
        row.appendChild(titleTd);

        let authorTd = document.createElement('td');
        let authorText = document.createTextNode(myLibrary[i].author);
        authorTd.appendChild(authorText);
        row.appendChild(authorTd);

        let pagesTd = document.createElement('td');
        let pagesText = document.createTextNode(myLibrary[i].pages);
        pagesTd.appendChild(pagesText);
        row.appendChild(pagesTd);

        let readTd = document.createElement('td');
        let readInput = document.createElement('INPUT');
        readInput.setAttribute('type', 'checkbox');
        readInput.checked = myLibrary[i].read;
        readTd.appendChild(readInput);
        row.appendChild(readTd);

        let deleteTd = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.className = "delete";
        let deleteText = document.createTextNode('Delete');
        deleteButton.appendChild(deleteText);
        deleteTd.appendChild(deleteButton);
        row.appendChild(deleteTd);
        deleteButton.addEventListener('click', deleteRow(i));

        tableBody.appendChild(row);
    }
        
}

function deleteRow(index) {
    myLibrary.splice(index, 1);
}