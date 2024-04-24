var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

var clics = 0;

function addOne() {
    clics++;
    compteur.textContent = clics;
}

button.addEventListener("click", addOne);
