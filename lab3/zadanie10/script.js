let circle = document.querySelector("#circle");
let container = document.querySelector("#container");
let warning = document.getElementById("warning");

let offsetHeight = document.getElementById('container').offsetHeight;
console.log(offsetHeight)

let offsetWidth = document.getElementById('container').offsetWidth;
console.log(offsetWidth)



function showCoords(event) {
    let xPos = event.clientX;
    let yPos = event.clientY;
    
    let containerPosition = getPosition(container);
    let containerX = containerPosition.x;
    let containerY = containerPosition.y;
    
    if (containerY <= yPos && yPos <= containerY + offsetHeight && containerX <= xPos && xPos <= containerX + offsetWidth){
        warning.style.display = "none";
        container.addEventListener("click", getClickPosition, false);

    } else {
        warning.style.display = "block";
        warning.style.left = xPos + "px";
        warning.style.top = yPos + "px";

    }
}

function getClickPosition(position){
    let containerPosition = getPosition(container);
    let containerX = containerPosition.x;
    let containerY = containerPosition.y;

    let xPosition = position.clientX - containerX - (circle.offsetWidth/2);
    let yPosition = position.clientY - containerY - (circle.offsetHeight/2);

    let translation3DVector = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    circle.style.transform = translation3DVector;
    
}

function getPosition(el) {
    let xPos = 0;
    let yPos = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        let yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }
