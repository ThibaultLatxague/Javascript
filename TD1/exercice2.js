let btnDmdLongueurLargeur = document.getElementById("btnDmdLongueurLargeur");

btnDmdLongueurLargeur.addEventListener('click', function() {
    var longueur = prompt("Entrez la longueur du rectangle : ");
    var largeur = prompt("Entrez la largeur du rectangle : ");
    var surface = longueur * largeur;
    alert("La surface du rectangle est de " + surface);
});