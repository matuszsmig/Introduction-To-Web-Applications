function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let numOfZombies = 0;
let score = 0
let lifes = 3;

let backgroundImg = document.getElementById("backImg");
backgroundImg.addEventListener("click", wrongClick);

let cursor = document.querySelector("#cursor1");

function wrongClick(){
    if (score>0){
        score-=6;
    }

    countPoints();
}

function zombieAnimation(zombie, movementSpeed){
    change = 200;
    currentAnime = 0;
    let currentPosition = 0;
    let zombieSpeed;

    switch(movementSpeed){
        case 0:
            zombieSpeed = 70;
            break;
        case 1:
            zombieSpeed = 60;
            break;
        case 2:
            zombieSpeed = 50;
            break;
        case 3:
            zombieSpeed = 40;
            break;
        case 4:
            zombieSpeed = 20;
            break;
        default:
            zombieSpeed = 70;
            break;
    }
    
    let myZombiee = setInterval(function () {
        zombie.style.backgroundPosition = currentAnime +"px 0px";
        zombie.style.left = -currentPosition + "vw";
        if (zombie.classList.contains("killed")){
            clearInterval(myZombiee);
        }

        currentAnime -= 200;
        currentPosition += 1;
    if (currentPosition==120){
        lifes-=1;
        zombie.remove();
        livesLeft();

        if (lifes==0){
            clearInterval(game);
        }
    }
    }, zombieSpeed);
    
}



function createZombie(){
    let zombieList = document.getElementById("zombies");
    let size = 1 + getRandomInt(5)/10;
    let movementSpeed = getRandomInt(5);
    let yPosition = -50 + getRandomInt(100)-50;
    let newZombie = document.createElement("div");
    newZombie.setAttribute("id", `div${numOfZombies}`)
    newZombie.classList.add("zombie");
    newZombie.style.bottom += yPosition+"px";
    newZombie.style.transform = "scale(" + size + ")";
    newZombie.addEventListener("click", killZombie);
    zombieAnimation(newZombie,movementSpeed)
    zombieList.appendChild(newZombie);
    numOfZombies+=1

}

function killZombie(){
    let zombieList = document.getElementById("zombies");
    let zombie = document.getElementById(this.id);
    zombie.classList.add("killed");
    zombieList.removeChild(zombie);
    zombie.remove();
    score+=12;
    countPoints();
}

function countPoints(){
    let points = document.getElementById("mainScore");
    points.innerHTML = "Score: " + score;
}

function livesLeft(){
    let fullLives = document.getElementById("livesRest");
    if (lifes < 0){
        lifes = 0;
    }
    fullLives.innerHTML = "Lives: " + lifes;
}

const nick = document.querySelector("#nickName");

function checkNick(){
    let nickName = nick.value;

    let tabRegexs =[
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /.{8}/,
        /.{16}/
    ];

    let small = tabRegexs[0];
    let big = tabRegexs[1];
    let numeric = tabRegexs[2];
    let len = tabRegexs[3];
    let maxLen = tabRegexs[4];

    if (len.test(nickName) && !maxLen.test(maxLen) &&
    (big.test(nickName) || numeric.test(nickName)|| small.test(nickName))){
        return true
    } else {
        alert("Incorrect Nickname");
    }
}

function changeCursor(event){
    cursor1.style.top = event.pageY + "px";
    cursor1.style.left = event.pageX + "px";
}

let startButton = document.getElementById("play");
startButton.addEventListener("click", startGame);
let resetGame = document.getElementById("again");
resetGame.addEventListener("click", endGame);

function endGame(){
    document.getElementById("lose").style.display = "none";
    document.getElementById("login").style.display = "flex";
}

function startGame(){
    if (checkNick() == true){
        numOfZombies = 0;
        score = 0
        lifes = 3;
        countPoints();
        livesLeft();
        let currentNick = document.getElementById("nick");
        currentNick.innerHTML = nick.value;
        currentNick.style.display = "block";
        document.getElementById("login").style.display = "none";
        window.addEventListener("mousemove", changeCursor);
        let myGame = setInterval(function () {
            if (lifes==0) {
                window.removeEventListener("mousemove", changeCursor);
                document.getElementById("lose").style.display = "flex";
                let div1 = document.getElementById("congrats");
                let div2 = document.getElementById("space");
                div1.innerHTML = "Congratulations " + nick.value + ",";
                div2.innerHTML = "your score was: " + score;
                clearInterval(myGame);
                clearInterval(myZombiee);
            }
            createZombie();
        }, 500);
    }

}