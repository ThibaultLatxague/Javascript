// Fonction pour demander la couleur et changer le fond
function choisirCouleur() {
    // Demande à l'utilisateur de choisir une couleur
    let couleur = prompt("Choisissez une couleur pour le fond (gris, bleu, vert) :").toLowerCase();
    
    // Associer les couleurs au code hexadécimal
    const couleurs = {
        "gris": "#C0C0C0",
        "bleu": "#669999",
        "vert": "#99FF66"
    };

    // Vérifier si la couleur est valide et changer le fond
    if (couleurs[couleur]) {
        document.body.style.backgroundColor = couleurs[couleur];
    } else {
        alert("Couleur invalide. Veuillez choisir entre 'gris', 'bleu', ou 'vert'.");
        choisirCouleur(); // Relancer la fonction si le choix est incorrect
    }
}

// Lancer la fonction lorsque la page se charge
window.onload = choisirCouleur;