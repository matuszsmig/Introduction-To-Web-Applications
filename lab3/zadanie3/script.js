let lowest = 6

let arr = [1,2,3,4,5]

function add(){
    let New = document.createElement("li");
    New.innerHTML = "Item nr " + lowest;
    lowest+=1;
    let lista = document.getElementById("lista");
    lista.appendChild(New)
}

function deleteEl(){
    const list = document.getElementById("lista");
    list.removeChild(list.firstElementChild);
    arr.shift()
    

}