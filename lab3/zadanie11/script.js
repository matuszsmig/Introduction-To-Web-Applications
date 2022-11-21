let list = document.getElementById("listOfRegions");

let tableOfRegions = [];
let populationOfRegions = [];
let areaOfRegions = [];

let buttonOne = document.getElementById("page1");
let buttonTwo = document.getElementById("page2");
let buttonThree = document.getElementById("page3");
let buttonFour = document.getElementById("page4");

buttonOne.addEventListener("click", changePage);
buttonTwo.addEventListener("click", changePage);
buttonThree.addEventListener("click", changePage);
buttonFour.addEventListener("click", changePage);

function inTab(tab, element,n) {
    for (let i = 0; i < n; i++) {
        if (element==tab[i]) {
            return false
        }
    }
    return true
}


function addRegions(n) {
    for (let i = 0; i < n; i++){
        let region = document.createElement("div");
        region.setAttribute("id", "div"+i);
        region.setAttribute("class", "list");
        region.innerHTML = "<div class='inline'> <i class='material-symbols-outlined i1show'>chevron_right</i> <div>"
            + tableOfRegions[i] +"</div> </div> <div></div> <div>" + populationOfRegions[i] +
            "</div> <div>" + areaOfRegions[i] +"</div>";
        region.addEventListener("click", showCountries);
        list.appendChild(region);
        let countries = document.createElement("section");
        countries.setAttribute("id", `section${i}`);
        list.appendChild(countries);
        let sect = document.getElementById(`section${i}`)
        sect.style.display = "none";
    }
}

async function mainFunction() {
    let json = await fetch("https://restcountries.com/v3.1/all");
    let myData = await json.json();
    for (let element in myData) {
        if(inTab(tableOfRegions,myData[element].subregion,tableOfRegions.length)){
            tableOfRegions.push(myData[element].subregion);
            populationOfRegions.push(0);
            areaOfRegions.push(0);
        }
    }
    for (let i = 0; i < tableOfRegions.length; i++) {
        for(let element in myData) {
            if(myData[element].subregion===tableOfRegions[i]) {
                areaOfRegions[i]+=myData[element].area;
                populationOfRegions[i]+=myData[element].population;
            }
        }
    }
    addRegions(tableOfRegions.length);
    for (let i = 0; i < tableOfRegions.length; i++){
        for(let element in myData) {
            if(myData[element].subregion===tableOfRegions[i]) {
                let sec = document.getElementById(`section${i}`);
                let country = document.createElement("div");
                country.setAttribute("class", "list2");
                country.innerHTML = "<div>" + myData[element].name.common + "</div> <div>" + myData[element].capital
                    + "</div> <div>" + myData[element].population + "</div> <div>" + myData[element].area + "</div>";
                sec.appendChild(country);
                
            }
        }
    }  
    for (let i = 0; i < tableOfRegions.length; i++) {
        let div = document.getElementById(`div${i}`);
        div.style.display="none";
    }

    let number = Math.round(tableOfRegions.length/4);

    for (let i = 0; i <= number; i++){
        let div = document.getElementById(`div${i}`);
        div.style.display="grid";
    }
    
}

function showCountries() {
    let len = this.id.length;
    let myId;
    if (len === 4){
        myId = this.id.charAt(3);
    }   else{
        myId = this.id.charAt(3)+this.id.charAt(4);
    }
    let sec = document.getElementById(`section${myId}`);
    let div = document.getElementById(`div${myId}`);


    if (sec.style.display == "none") {
        sec.style.display = "block";
        div.style.border = "0px";
        div.childNodes[0].childNodes[1].innerHTML = "<i class='material-symbols-outlined'>expand_more</i>";
    }   else{
        sec.style.display = "none";
        div.style.borderBottom = "1px solid rgb(153, 153, 153)";
        div.childNodes[0].childNodes[1].innerHTML = "<i class='material-symbols-outlined'>chevron_right</i>";
    }
    
}



function changePage() {
    for (let i = 0; i < tableOfRegions.length; i++) {
        let div = document.getElementById(`div${i}`);
        let sec = document.getElementById(`section${i}`);
        if (sec.style.display == "block"){
            sec.style.display = "none";
            div.style.borderBottom = "1px solid rgb(153, 153, 153)";
            div.childNodes[0].childNodes[1].innerHTML = "<i class='material-symbols-outlined'>chevron_right</i>";
        }
        div.style.display="none";
    }
    let thisId = this.id.charAt(4);
    let number = Math.round(tableOfRegions.length/4);
    if (thisId==1) {
        for (let i = 0; i <= thisId*number; i++){
            let div = document.getElementById(`div${i}`);
            div.style.display="grid";
        }
    }
    if (thisId==2) {
        for (let i = (thisId-1)*number+(thisId-1); i <= thisId*number+(thisId-1); i++) {
            let div = document.getElementById(`div${i}`);
            div.style.display="grid";
        }
    }
    if (thisId==3) {
        for (let i = (thisId-1)*number+(thisId-1); i <= thisId*number+(thisId-1); i++){
            let div = document.getElementById(`div${i}`);
            div.style.display="grid";
        }
    }   if(thisId==4) {
        for (let i = (thisId-1)*number+(thisId-1); i < tableOfRegions.length; i++){
            let div = document.getElementById(`div${i}`);
            div.style.display="grid";
        }
    }
}


mainFunction();