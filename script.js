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

//intitialize array
let shining = new Book("shining", "stephen", 200, "Read")
let notShining = new Book("notshining", "notstephen", 100, "Not Read")

myLibrary = [shining, notShining]

const list = document.getElementById("book-list")

const createRow = function(book, position) {    
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

//clears form called after new book is added
function clear(){
   document.getElementById("title").value = ''
   document.getElementById("author").value = ''
   document.getElementById("pages").value = ''
}

//adds new book to table and library array
document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    if(title.value != '' && author.value != ''){
    const newBook = new Book(title.value, author.value, pages.value, isRead.value);
    myLibrary.push(newBook)
    displayBooks();
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
    //the table body element
    let tableBody = e.target.parentElement.parentElement.parentElement;
    //index of row clicked
    let bookIndex = e.target.parentElement.parentElement.dataset.position;
    
    if(e.target.classList.contains('delete')){
        myLibrary.splice(e.target.parentElement.parentElement.dataset.position, 1)

        //delete all rows to reset position data attribute
        while(tableBody.firstChild){
           tableBody.removeChild(tableBody.lastChild)
        }
        //loop through to set onpage false
        for(i = 0; i < myLibrary.length; i++){
            myLibrary[i].onPage = false;
        }

        //redisplay books in array
        displayBooks();
    }

    //change read status
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