let counter = 0;
let valueOfCounter = document.getElementById("licznik");

let blue = document.getElementById("blue");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");

let changer = 0;

let tablica = [blue,red,yellow];
let tablicaKolorow = ["rgb(0, 110, 255)","rgb(255, 34, 34)","rgb(255, 252, 71)"];

tablica[0].addEventListener("click", addOne);
tablica[1].addEventListener("click", addTwo);
tablica[2].addEventListener("click", addFive);

let flagOfPropagation = true;
let komentarze = document.getElementById("komunikaty");
let licznikKomentarzy = 0;


let boolForOne = true;
let boolForTwo = true;
let boolForFive = true;


function control() {
    if (counter>=20) {
        boolForTwo = false;
    } 

    if (counter>=50) {
        boolForFive = false;
    } 
}

function prop(event) {
    if (flagOfPropagation == false) {
        event.stopPropagation();
    }
}

function addOne() {
    prop(event);
    counter += 1;
    valueOfCounter.innerHTML = "Licznik wynosi: " + counter;
    let New = document.createElement("div");
    New.innerHTML = "nacisnąłeś niebieski o wartości 1";
    komentarze.appendChild(New)
    licznikKomentarzy+=1;
    
}

function addTwo() {
    prop(event);
    if (boolForTwo == true) {
        counter += 2;
        valueOfCounter.innerHTML = "Licznik wynosi: " + counter;
        let New = document.createElement("div");
        New.innerHTML = "nacisnąłeś czerwony o wartości 2";
        komentarze.appendChild(New)
        licznikKomentarzy+=1;
    }

}

function addFive() {
    prop(event);
    if (boolForFive  == true) {
        counter += 5;
        valueOfCounter.innerHTML = "Licznik wynosi: " + counter;
        let New = document.createElement("div");
        New.innerHTML = "nacisnąłeś żółty o wartości 5";
        komentarze.appendChild(New)
        licznikKomentarzy+=1;
    }
}

function blockPropagation() {
    if (flagOfPropagation == true) {
        flagOfPropagation = false;
    } else {
        flagOfPropagation = true;
    }
}

function reset() {
    valueOfCounter.innerHTML = "Licznik wynosi: 0";
    counter = 0;
    boolForFive=true;
    boolForTwo=true;
    for (let i = 0; i < licznikKomentarzy; i+=1) {
        komentarze.removeChild(komentarze.firstElementChild);
    }
}

function change() {
    if (changer%2==0) {
        tablica[0].removeEventListener("click", addOne);
        tablica[2].removeEventListener("click", addFive);
    } else {
        tablica[2].removeEventListener("click", addOne);
        tablica[0].removeEventListener("click", addFive);
    }

    changer+=1;
    if (changer%2==0) {
        tablica[0].addEventListener("click", addOne);
        tablica[2].addEventListener("click", addFive);
        tablica[0].style.backgroundColor = tablicaKolorow[0];
        tablica[2].style.backgroundColor = tablicaKolorow[2];
    }
    else {
        tablica[2].addEventListener("click", addOne);
        tablica[0].addEventListener("click", addFive);
        tablica[2].style.backgroundColor = tablicaKolorow[0];
        tablica[0].style.backgroundColor = tablicaKolorow[2];
    }
}

