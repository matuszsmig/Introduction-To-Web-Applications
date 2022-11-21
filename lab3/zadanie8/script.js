const enterPW = document.querySelector("#inputNewPassword");
const repeatPW = document.querySelector("#inputRNewPassword");
const chars = document.getElementById("chars");
const special = document.getElementById("special");
const capital = document.getElementById("capital");
const digit = document.getElementById("digit");

function passwordStrenght() {
    let password = enterPW.value;

    let tabRegexs = [
        /[A-Z]/,
        /[0-9]/,
        /.{8}/,
        /[!-//:-@[-`{-ÿ]/
    ];

    let Big = tabRegexs[0];
    let Digit = tabRegexs[1];
    let Chars = tabRegexs[2];
    let Special = tabRegexs[3];

    if (Big.test(password)) {
        capital.style.backgroundColor = "green";
    }   else{
        capital.style.backgroundColor = "rgb(184, 184, 184)";
    }

    if (Digit.test(password)) {
        digit.style.backgroundColor = "green";
    }   else{
        digit.style.backgroundColor = "rgb(184, 184, 184)";
    }

    if (Chars.test(password)) {
        chars.style.backgroundColor = "green";
    }   else{
        chars.style.backgroundColor = "rgb(184, 184, 184)";
    }

    if (Special.test(password)) {
        special.style.backgroundColor = "green";
    }   else{
        special.style.backgroundColor = "rgb(184, 184, 184)";
    }
}

let inputPW = document.querySelector('#inputNewPassword');
inputPW.addEventListener('keyup', passwordStrenght);

function comparePasswords() {
    if (special.style.backgroundColor == "green" && chars.style.backgroundColor == "green"
    && digit.style.backgroundColor == "green" && capital.style.backgroundColor == "green"){
        if (enterPW.value == repeatPW.value){
            alert("Passwords correct");
        }
        else{
            alert("Passwords are diffrent");
        }
    }
    else{
        alert("Check requirements!");
    }
}

function pwVisible() {
    const NPon = document.getElementById("NPon");
    const NPoff = document.getElementById("NPoff");
    if (NPon.style.display == "none") {
        NPon.style.display = "block"
        NPoff.style.display = "none"
        enterPW.type = "password"
    }
    else {
        NPon.style.display = "none"
        NPoff.style.display = "block"
        enterPW.type = "text"
    }
}


function rVisible() {
    const Ron = document.getElementById("Ron");
    const Roff = document.getElementById("Roff");
    if (Ron.style.display == "none") {
        Ron.style.display = "block"
        Roff.style.display = "none"
        repeatPW.type = "password"
    }
    else {
        Ron.style.display = "none"
        Roff.style.display = "block"
        repeatPW.type = "text"
    }
}