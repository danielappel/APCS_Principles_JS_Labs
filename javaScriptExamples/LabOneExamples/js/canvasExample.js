//Example of javaScript Canvas

//Global variables to be used by all functions
var canvas;
var context;

window.onload = function() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    makeRectangle();
}

makeRectangle = function() {

    context.fillRect(10, 10, 100, 100);
};



changeColor = function() {
    canvas.style.backgroundColor = "red";   
};

chooseColor = function() {
    var colorinput = document.getElementById("colorChooser");
    var color = colorinput.value;
    canvas.style.backgroundColor = color;   
};

