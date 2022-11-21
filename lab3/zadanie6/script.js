let lists = document.getElementById("elemntOfList");

let added = document.getElementById("addingButton");
added.addEventListener("click", addPerson);

const personName = document.querySelector("#inputName");
const telephoneNumber = document.querySelector("#inputTel");

let persons = 0;

let binTable = []

function addPerson(){
    console.log(added);
    if (telephoneNumber.checkValidity() && personName.checkValidity()) {

        let Person = document.createElement("div");
        Person.setAttribute("id", "Div"+persons);

        Person.innerHTML = "<div> <div class='name'> "+ personName.value.trim() + "</div> <div class='number'>" 
        + telephoneNumber.value.trim() + "</div> </div> <div id='bin"+persons+"'> <i class='fa fa-trash'></i></div>";
        
        lists.appendChild(Person);

        let toBin = document.getElementById("bin"+persons);
        toBin.addEventListener("click", deletePerson);
        
        persons+=1;
    }
}


function deletePerson(){
    lists.removeChild(document.getElementById(this.parentNode.id));
}