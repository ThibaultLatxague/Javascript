let btnDmdLongueurLargeur = document.getElementById("btnDmdLongueurLargeur");
let btnAfficherPerim = document.getElementById("afficherPerimetre");

btnDmdLongueurLargeur.addEventListener('click', function() {
    var longueur = prompt("Entrez la longueur du rectangle : ");
    var largeur = prompt("Entrez la largeur du rectangle : ");
    var surface = longueur * largeur;
    alert("La surface du rectangle est de " + surface);
});

afficherPerimetre.addEventListener('click', function() {
    var longueur = prompt("Entrez la longueur du rectangle : ");
    var largeur = prompt("Entrez la largeur du rectangle : ");
    var perimetre = 2 * (parseFloat(longueur) + parseFloat(largeur));
    let resultat = document.getElementById("Resultat");
    resultat.innerHTML = "Le perimetre du rectangle est de " + perimetre;
});