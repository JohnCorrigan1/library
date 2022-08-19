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



const createRow = function(book){
    const list = document.getElementById("book-list")
    const row = document.createElement('tr')

    
    row.innerHTML = `
    
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.isRead}</td>
    <td><button class="delete" type="submit" id="delete">Remove</td>`;

    
    list.appendChild(row)
}

createRow(shining)
createRow(notShining)


document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    const newBook = new Book(title.value, author.value, pages.value, isRead.value);
    console.log(newBook)
    myLibrary.push(newBook)
    createRow(newBook);
})

/*
trying to delete

const btns = document.querySelectorAll('button')

btns.addEventListener("click", function(btns){
    console.log("test")
    if(btns.classList.contains('delete')){
    btns.parentElement.remove();
    }
})
*/





