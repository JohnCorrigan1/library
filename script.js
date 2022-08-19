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

let shining = new Book("shining", "stephen", 200, "Read")
let notShining = new Book("notshining", "notstephen", 100, "Not Read")

myLibrary = [shining, notShining]



const list = document.getElementById("book-list")



const createRow = function(book, position){
    
    const row = document.createElement('tr')
    row.dataset.position = position;

    
    row.innerHTML = `
    
    <td data-position="${position}">${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><button class="read-status">${book.isRead}</button></td>
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
function displayBooks(position){
    for(i = 0; i < myLibrary.length; i++){
        if(!myLibrary[i].onPage){
            createRow(myLibrary[i], i)
            myLibrary[i].onPage = true;
        }
        
    }
}



//deletes row of book
list.addEventListener("click", e => {
    //index of row clicked
    let tableBody = e.target.parentElement.parentElement.parentElement;
    let bookIndex = e.target.parentElement.parentElement.dataset.position;
    //console.log(bookIndex);
    if(e.target.classList.contains('delete')){
        myLibrary.splice(e.target.parentElement.parentElement.dataset.position, 1)

        while(tableBody.firstChild){
            //console.log(tableBody.lastChild.dataset.position)
            console.log("test")
           tableBody.removeChild(tableBody.lastChild)
        }
        //e.target.parentElement.parentElement.remove();
        //console.log(row.children)
        for(i = 0; i < myLibrary.length; i++){
            myLibrary[i].onPage = false;
        }
        displayBooks();
    }

    if(e.target.classList.contains('read-status')){
        if(e.target.innerHTML == "Read"){
            e.target.innerHTML = "Not Read"
            myLibrary[bookIndex].isRead = "Not Read"
        }
        else if(e.target.innerHTML == "Not Read"){
            e.target.innerHTML = "Read"
            myLibrary[bookIndex].isRead = "Read"
        }   
    }    
})


displayBooks();