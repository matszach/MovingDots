// references to dots
var redDot = document.querySelector("#redDot");
var blueDot = document.querySelector("#blueDot");
var greenDot = document.querySelector("#greenDot");
var yellowDot = document.querySelector("#yellowDot");

// place references in a list
var dotList = [redDot,blueDot,greenDot,yellowDot];

// equip with on click listener
dotList.forEach(dot=>dot.addEventListener("click",moveInRandomDir,false));


// move in random direction function
function moveInRandomDir(e){
    var left = Math.random()*500+15;
    var top = Math.random()*350+15;
    e.currentTarget.style.left = left + 'px';
    e.currentTarget.style.top = top + 'px';
}
