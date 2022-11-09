let i = 0;
let tablica = ["one", "two", "three"]


function zmiana(){
    i+=1;

    let zdjecie = document.getElementById(tablica[i%3])
    let zdjecie2 = document.getElementById(tablica[(i-1)%3])
    
    zdjecie.style.display = "block";
    zdjecie2.style.display = "none";

    //obj.style.color ...
    //background-color
    //obj.style.backgroundColor
    //obj.style["background-color"]

}