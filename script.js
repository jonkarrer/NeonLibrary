var myLibrary = []; 

//ES6 object constructor
class Book {
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
    }
   makeMe() { 
    //Make book
    var buk = document.createElement('div');
    buk.className = "book";
    document.getElementById('shelf1').appendChild(buk);

    //Make title
    var tytle = document.createElement('div');
    tytle.id = 'title';
    buk.appendChild(tytle);
    var peeOne = document.createElement('p1');
    tytle.appendChild(peeOne);
    peeOne.innerText = this.title;

    var awthor = document.createElement('div');
    awthor.id = 'author';
    buk.appendChild(awthor);
    var peeTwo = document.createElement('p2');
    awthor.appendChild(peeTwo);
    peeTwo.innerText = this.author;
    var breyk = document.createElement('BR');
    buk.appendChild(breyk);

    //Read Line
    var red = document.createElement('p3');
    red.innerText = 'Read?';
    buk.appendChild(red);

    //Make toggle
    var toggle = document.createElement('div');
    toggle.id = "didRead";
    buk.appendChild(toggle);
    var label = document.createElement('LABEL');
    label.className = 'switch';
    toggle.appendChild(label);

    var input = document.createElement("INPUT");
    input.setAttribute("type", "checkbox");
    label.appendChild(input);

    var span = document.createElement('SPAN');
    span.className = 'slider';
    label.appendChild(span);
    
    var breek = document.createElement('BR');
    buk.appendChild(breek);
    //Make Delete button
    var dee = document.createElement('div');
    dee.className = 'del';
    buk.appendChild(dee);
    var but = document.createElement('BUTTON');
    but.innerText = "Delete";
    dee.appendChild(but);
   }
   
}

//New Book Button
document.getElementById("addBook").addEventListener("click", function makeBook() {
    title = prompt("Enter Book Title");
    author = prompt("Enter Book Author");
    addBookToLibrary(); //Calls book maker
});

//Loop Through array and Display Book;
var i = 0;
function addBookToLibrary() {
    //Make Book
    var elBook = new Book(title, author);
    myLibrary.push(elBook);
    //Push new Book to library
    while( i < myLibrary.length) {
        myLibrary[i].makeMe(); //Display book on page
        i += 1;
    }
    //Allow Books to be Deleted
    document.querySelectorAll('.del').forEach(item => {
        item.addEventListener('click', event => {
            item.parentNode.remove();
        })
      })
};














