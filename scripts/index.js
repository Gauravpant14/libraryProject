//constructor
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type; 
}

//display constructor
function Display(){

}

//Add methods to display prototype
Display.prototype.add = function(book){
    console.log("adding to ui");
    let tbody = document.getElementById('tablebody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                     </tr>`;

    tbody.innerHTML += uiString;                 
}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset(); //form will be reset form data after adding form data
}

//add submit eventListner to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
    
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let type;

    let fiction = document.getElementById('Fiction');
    let programming = document.getElementById('Programming');
    let science =document.getElementById('Science');

    
    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(science.checked){
        type = science.value;
    }

    let book = new Book(name,author,type);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();

    e.preventDefault();
    
}
