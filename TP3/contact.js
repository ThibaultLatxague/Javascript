let boutonSend = document.getElementById('send');
let nombreAleatoire;
boutonSend.addEventListener('click', verifierChamps);

// Fonction principale
function verifierHumain() {
    // Tirage d'un nombre aléatoire entre 1 et 100
    nombreAleatoire = Math.floor(Math.random() * 20) + 1;
    console.log("Nombre à deviner (debug) : " + nombreAleatoire); // À supprimer en production
    
    let essaisRestants = 5;

    // Boucle pour les 5 essais
    while (essaisRestants > 0) {
        const saisieUtilisateur = prompt(
            `Devinez le nombre (entre 1 et 100). Il vous reste ${essaisRestants} essais :`
        );

        // Vérifier si l'utilisateur a annulé
        if (saisieUtilisateur === null) {
            alert("Action annulée !");
            return;
        }

        // Convertir la saisie en nombre
        const nombreUtilisateur = parseInt(saisieUtilisateur, 10);

        // Vérifier si la saisie est valide
        if (isNaN(nombreUtilisateur)) {
            alert("Veuillez entrer un nombre valide !");
            continue; // Ne pas compter cet essai
        }

        // Comparer la saisie au nombre aléatoire
        if (nombreUtilisateur === nombreAleatoire) {
            alert("Bravo, vous avez trouvé le bon nombre !");
            return; // Sortir de la fonction en cas de succès
        } else if (nombreUtilisateur < nombreAleatoire) {
            alert("Trop petit !");
        } else {
            alert("Trop grand !");
        }

        // Réduire le nombre d'essais restants
        essaisRestants--;
    }

    // Si l'utilisateur échoue, rediriger vers la page précédente
    alert("Vous avez épuisé vos 5 essais. Retour à la page précédente.");
    history.back();
}

function verifierParams() {
    if(navigator.userAgent.indexOf("Chrome") == -1) {
        alert("Veuillez utiliser Google Chrome pour accéder à ce site.");
        window.location.href = "https://www.google.com/chrome/";
    }

    if(!navigator.language.startsWith("fr")) {
        alert("Veuillez utiliser le français pour accéder à ce site.");
        window.location.href = "contact.html";
    }

    let numeroVerification = document.getElementById('verification');
    numeroVerification.value = nombreAleatoire;
}

function verifierChamps() {
    const emailMatch = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let category = document.getElementById('category').value;

    if (!emailMatch.test(document.getElementById('email').value)) {
        alert("Veuillez entrer une adresse email valide !");
        return;
    }

    if(document.getElementById('verification').value != nombreAleatoire) {
        alert("Veuillez entrer le bon nombre !");
        return;
    }

    alert("BRAVO !");
}

function ajouterCategorie() {
    const selectElement = document.getElementById("categories");
    const valeurChoisie = selectElement.value;

    // Vérifier si "Other" est sélectionné
    if (valeurChoisie === "Other") {
        const nouvelleCategorie = prompt("Veuillez saisir une nouvelle catégorie (ne doit pas commencer par un chiffre) :");

        // Vérifier si la saisie est valide
        if (nouvelleCategorie) {
            if (!nouvelleCategorie.match(/^\d/)) { // Vérifie que la saisie ne commence pas par un chiffre
                // Ajouter la nouvelle catégorie à la liste
                const nouvelOption = document.createElement("option");
                nouvelOption.value = nouvelleCategorie;
                nouvelOption.textContent = nouvelleCategorie;
                selectElement.appendChild(nouvelOption);

                // Sélectionner automatiquement la nouvelle catégorie
                selectElement.value = nouvelleCategorie;

                alert("La catégorie a été ajoutée avec succès !");
            } else {
                alert("La catégorie ne peut pas commencer par un chiffre. Veuillez réessayer.");
            }
        } else {
            alert("Vous n'avez pas saisi de catégorie.");
        }
    }
}

// Lancer la vérification dès le chargement de la page
window.onload = verifierHumain;
window.onload = verifierParams;