//funcion para la funcion genrar colores random
var cuadrados = 
cuadrados = 6;
var randomColor = function(){
    var r= [Math.floor(Math.random()*256)];
    var g= [Math.floor(Math.random()*256)];
    var b= [Math.floor(Math.random()*256)];
    return "rgb("+r+", "+g+", "+b+")"
}
//funcion para genarar colores random

var generateRandomColor = function(cuadrados){
    var masColores=[];
    for (var i=0;i<cuadrados;i++){
        masColores.push(randomColor());
    }
    return masColores;
}
//Variables
var colores = generateRandomColor(cuadrados);
var cuadrado = document.querySelectorAll(".square");
var colordisplay =document.querySelector("#colorDisplay");
var pickedColor= colores[Math.floor(Math.random()*6)];
colordisplay.textContent=pickedColor; 
var mensaje = document.querySelector("#message");
var h1 = document.querySelector("h1");
var botonreset = document.querySelector("#reset");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");


//Darle a cada cuadrado un "colores"
for (var i=0;i<cuadrado.length;i++){
    cuadrado[i].style.backgroundColor=colores[i]; 
};

//Funcion para que todos los cuadrados cambien al color correcto
function changeColors(color){
    for (var i = 0; i < cuadrado.length; i++) {
      cuadrado[i].style.background=color;
    }
}

//loop para el juego
for (var i=0;i<cuadrado.length;i++){
    cuadrado[i].addEventListener("click",function (){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor !== pickedColor) {
            mensaje.textContent = "Intenta otra vez :(";
            this.style.backgroundColor = "rgb(0, 0, 0)";
        } else {
            mensaje.textContent = "Coorrecto :)";
            h1.style.backgroundColor = clickedColor;
            changeColors(pickedColor);
            botonreset.textContent="Jugar otra vez?"
        }
    })
}

//Funcion resetear todo

function resetear(){
    colores=generateRandomColor(cuadrados);
    pickedColor= colores[Math.floor(Math.random()*cuadrados)];
    colordisplay.textContent=pickedColor;
    h1.style.backgroundColor= "rgb(0, 0, 0)";
    botonreset.textContent="Nuevos colores";
    mensaje.textContent="";
    for (var i=0;i<cuadrado.length;i++){
        cuadrado[i].style.backgroundColor=colores[i]; 
    };
}

botonreset.addEventListener("click", function(){
    resetear()
})
//Botones Hard - Easy
easy.addEventListener("click",function(){
    hard.classList.remove("selected")
    easy.classList.add("selected")
    cuadrados=3;
    resetear();
    for (var i=3;i<6;i++){
        cuadrado[i].style.display="none";
    }
    
})
hard.addEventListener("click",function(){
    hard.classList.add("selected")
    easy.classList.remove("selected")
    cuadrados=6;
    for (var i=3;i<6;i++){
        cuadrado[i].style.display="block"; 
    };
    resetear();
});
