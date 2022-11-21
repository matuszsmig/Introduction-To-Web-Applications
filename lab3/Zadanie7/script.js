async function getData() {
    let miasta = await fetch("http://localhost:3000/cities").then(res => res.json());
    return miasta
}


async function zadanieA(json) {
    let miasta = json;

    let filtered = miasta.filter(function (entry) {
        return entry.province === "małopolskie";
    });

    let cities = ""

    for (let element in filtered) {
        if (!filtered.hasOwnProperty(element)) {
            continue;
        }
        cities += filtered[element].name + ", "
    }
    cities = cities.substr(0, cities.length - 2);

    let odp = document.getElementById("odpA");
    odp.textContent = cities;

}

function countA(word) {
    let counter = 0;
    for (let i = 0 ; i < word.length; i+=1) {
        if (word.charAt(i) === 'a' || word.charAt(i) === 'A') {
            counter +=1;
        }
    }
    if (counter == 2) {
        return true
    }
    return false
}

async function zadanieB(json) {
    let miasta = json;

    let filtered = miasta.filter(function (entry) {
        return countA(entry.name);
    });

    let cities = ""

    for (let element in filtered) {
        if (!filtered.hasOwnProperty(element)) {
            continue;
        }
        cities += filtered[element].name + ", "
    }
    cities = cities.substr(0, cities.length - 2);

    let odp = document.getElementById("odpB");
    odp.textContent = cities;

}

function sort(tab) {
    let n = tab.length;
    let i, j;
    for (i = 0; i < n-1; i++){
        for (j = 0; j < n-i-1; j++) {
            if (tab[j][1] > tab[j+1][1]) {
                let x = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = x;
            }
        }
    }
    tab.reverse();
    return tab;
}

async function zadanieC(json) {
    let miasta = json;
    let listaZag = [];
    for (let element in miasta) {
        listaZag.push([miasta[element].name, miasta[element].dentensity]);
    }
    sort(listaZag);
    console.log(listaZag)
    document.getElementById("odpC").textContent = listaZag[4][0];
}

function city(ludnosc) {
    if (ludnosc > 100000) {
        return true
    }
    return false
}

async function zadanieD(json) {
    let miasta = json;

    let filtered = miasta.filter(function (entry) {
        return city(entry.people);
    });

    let cities = ""

    for (let element in filtered) {
        if (!filtered.hasOwnProperty(element)) {
            continue;
        }
        cities += filtered[element].name + " City, "
    }
    cities = cities.substr(0, cities.length - 2);

    let odp = document.getElementById("odpD");
    odp.textContent = cities;

}

async function zadanieE(json) {
    let miasta = json;
    let liczbaMiastMalych = 0;
    let liczbaMiastDuzych = 0;
    for (let element in miasta) {
        if (miasta[element].people > 80000) {
            liczbaMiastDuzych+=1;
        } else {
            liczbaMiastMalych+=1;
        }
    }
    let odp = document.getElementById("odpE");
    if (liczbaMiastDuzych > liczbaMiastMalych) {
        odp.textContent = "Więcej miast jest powyżej 80000: " + liczbaMiastDuzych;
    } else {
        odp.textContent = "Więcej miast jest poniżej 80000: " + liczbaMiastMalych;
    }
}

async function zadanieF(json) {
    let miasta = json;
    let liczbaMiastNaP = 0;
    let powierzchnia = 0;
    for (let element in miasta) {
        if (miasta[element].township.charAt(0) == "p") {
            liczbaMiastNaP+=1;
            powierzchnia+=miasta[element].area;
        }
    }
    let odp = document.getElementById("odpF");
    odp.textContent = powierzchnia/liczbaMiastNaP;
}

async function zadanieG(json) {
    let miasta = json;
    let liczbaMiast = 0;
    let flag = true;
    for (let element in miasta) {
        if (miasta[element].province == 'pomorskie'){
            liczbaMiast+=1;
        } else {
            flag = false;
        }
    }
    let odp = document.getElementById("odpG");
    if (flag == true) {
        odp.textContent = "Wszystkie miasta w pomorskim mają ludność powyżej 5000 i jest ich: " + liczbaMiast;
    } else {
        odp.textContent = "Nie szystkie miasta w pomorskim mają ludność powyżej 5000 i jest ich: " + liczbaMiast;
    }
}



async function loadSite() {
    let miasta = await getData();
    zadanieA(miasta);
    zadanieB(miasta);
    zadanieC(miasta);
    zadanieD(miasta);
    zadanieE(miasta);
    zadanieF(miasta);
    zadanieG(miasta);
}

loadSite();