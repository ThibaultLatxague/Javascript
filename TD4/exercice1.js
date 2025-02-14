let nouvelleFenetre; // Variable pour stocker la référence à la nouvelle fenêtre
let btnOuvrirFenetre = document.getElementById("btnOuvrirFenetre");
let btnDeplacerFrance = document.getElementById("btnDeplacerFrance");

// Fonction qui ouvre une fenêtre avec une largeur et hauteur spécifiées
btnOuvrirFenetre.addEventListener('click', function() {
    let w = document.getElementById('largeur').value;
    let h = document.getElementById('hauteur').value;
    nouvelleFenetre = window.open("", "", "width=" + w + ", height=" + h);
});

// Fonction qui déplace la nouvelle fenêtre de x et y
btnDeplacerFrance.addEventListener('click', function(x, y) {
    if (nouvelleFenetre) {
        nouvelleFenetre.moveBy(parseInt(x), parseInt(y));
    } else {
        alert("La fenêtre n'est pas ouverte. Veuillez l'ouvrir d'abord.");
    }
});