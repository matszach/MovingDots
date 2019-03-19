var isColor1 = true;

function colorShiftAnimation(elementId,color1,color2,speed){
    var elem = document.getElementById(elementId);
    if(isColor1){
        elem.style.backgroundColor = color1;
        isColor1 = false;
    }else{
        elem.style.backgroundColor = color2;
        isColor1 = true;
    }
    //passes function as a string, and the timeout length, resulting in ongoing loop
    var functionAsString = `colorShiftAnimation(\'${elementId}\',\'${color1}\',\'${color2}\',${speed})`
    setTimeout(functionAsString,speed);
}