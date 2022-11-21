const ad = document.getElementById("content1");
const gp = document.getElementById("content2");
const hms = document.getElementById("content3");
const cz = document.getElementById("content4");

const tab = [ad,gp,hms,cz];

const size = tab.length;

let itr = 9999;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function rightClick() {
    itr+=1;

    let disAvtive = tab[(itr-1)%size];
    let avtive = tab[itr%size];

    disAvtive.style.animationName = "slidein12";
    sleep(200).then(() => {
        disAvtive.style.display = "none";
        avtive.style.display = "flex";
        avtive.style.animationName = "slidein11";
    });
    
}

function leftClick (){
    itr-=1;

    let disAvtive = tab[(itr+1)%size];
    let avtive = tab[itr%size];

    disAvtive.style.animationName = "slidein22";
    sleep(200).then(() => {
        disAvtive.style.display = "none";
        avtive.style.display = "flex";
        avtive.style.animationName = "slidein21";
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function randomize() {
    let disAvtive = tab[(itr)%size];
    let ran = getRandomInt(size);
    itr = itr + ran;
    let avtive = tab[(itr)%size];
    disAvtive.style.animationName = "slidein12";
    sleep(200).then(() => {
        disAvtive.style.display = "none";
        avtive.style.display = "flex";
        avtive.style.animationName = "slidein11";
    });
}