
// wrapper function, allows individual 'isColor1' var for each element
function runColorAnimation(elementId,color1,color2,speed){
    var isColor1 = true;
    colorShiftAnimation(elementId,color1,color2,speed,isColor1);
}

// function that performs the actualt color shift, and then loops afetr a timeout.
// Transition time set in .css file
function colorShiftAnimation(elementId,color1,color2,speed,isColor1){
    var elem = document.getElementById(elementId);
    if(isColor1){
        elem.style.backgroundColor = color1;
        isColor1 = false;
    }else{
        elem.style.backgroundColor = color2;
        isColor1 = true;
    }
    //passes function as a string, and the timeout length, resulting in ongoing loop
    var functionAsString = `colorShiftAnimation(\'${elementId}\',\'${color1}\',\'${color2}\',${speed},${isColor1})`
    setTimeout(functionAsString,speed);
}


