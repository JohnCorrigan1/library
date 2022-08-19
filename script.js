//book library array
let myLibrary = [];

//new book constructor
function Book(title, author, pages, isRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
    this.onPage = false;
}

    
//add book function
function addBookToLibrary(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").value;
    return new Book(title, author, pages, isRead)
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.isRead
}

let shining = new Book("shining", "stephen", 200, "read")
let notShining = new Book("notshining", "notstephen", 100, "not ")

myLibrary = [shining, notShining]

const list = document.getElementById("book-list")

const createRow = function(book, position){
    
    const row = document.createElement('tr')
    row.dataset.position = position;

    
    row.innerHTML = `
    
    <td data-position="${position}">${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.isRead}</td>
    <td><button class="delete" type="submit">Remove</td>`;

    
    list.appendChild(row)
}

function clear(){
   document.getElementById("title").value = ''
   document.getElementById("author").value = ''
   document.getElementById("pages").value = ''
}


document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    if(title.value != '' && author.value != ''){
    const newBook = new Book(title.value, author.value, pages.value, isRead.value);
    myLibrary.push(newBook)
    displayBooks();

    //createRow(newBook);
    clear();
    }
})


//iterates through library array and displays books that aren't displayed
function displayBooks(){
    for(i = 0; i < myLibrary.length; i++){
        if(!myLibrary[i].onPage){
            createRow(myLibrary[i], i)
            myLibrary[i].onPage = true;
        }
    }
}



//deletes row of book
list.addEventListener("click", e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        myLibrary.splice(e.target.parentElement.parentElement.dataset.position, 1)
        displayBooks();
    }
})



displayBooks();