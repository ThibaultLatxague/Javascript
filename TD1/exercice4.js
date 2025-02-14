let btnAfficherLongueurLargeur = document.getElementById("btnAfficherLongueurLargeur");
let btnAfficherPerimetre = document.getElementById("btnAfficherPerimetre");

btnAfficherLongueurLargeur.addEventListener('click', function() {
    var longueur = document.getElementById("longueur").value;
    var largeur = document.getElementById("largeur").value;
    var surface = longueur * largeur;
    alert("La surface du rectangle est de " + surface);
});

btnAfficherPerimetre.addEventListener('click', function() {
    var longueur = document.getElementById("longueur").value;
    var largeur = document.getElementById("largeur").value;
    var perimetre = 2 * (parseFloat(longueur) + parseFloat(largeur));
    let resultat = document.getElementById("Resultat");
    resultat.innerHTML = "Le perimetre du rectangle est de " + perimetre;
});