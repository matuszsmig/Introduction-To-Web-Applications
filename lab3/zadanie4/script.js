var counter = 0
var flag = false

function test(){
    if (flag){
        counter+=1
        let divek = document.getElementById("conuter")
        divek.innerHTML = "Licznik wynosi: " + counter
    }
}

function stop(){
    let divek = document.getElementById("conuter")
        divek.innerHTML = "Licznik wynosi: 0"
    counter = 0
    flag = false
}

function start(){
    flag=true
}