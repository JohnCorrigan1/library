//book library array
let myLibrary = [];

//new book constructor
function Book(title, author, pages, isRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
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

const createCard = function(book){
    const card = document.getElementById("card")
    const title = document.getElementById("title1")
    const author = document.getElementById("author1")
    const pages = document.getElementById("page1")
    const isRead = document.getElementById("readthis")


    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages
    isRead.textContent = book.isRead


    
}

document.getElementById("submit").addEventListener("click", function(){
    const newBook = new Book(title.value, author.value, pages.value, isRead.value);
    console.log(newBook)
    myLibrary.push(newBook)
    createCard(newBook);
   
//console.log(notShining.info())

})




