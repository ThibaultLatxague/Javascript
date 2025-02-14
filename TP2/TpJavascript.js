// Exercice 1
let joursDeLaSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

console.log("Les jours de la semaine : " + joursDeLaSemaine.join(" ; ") + ".");

for (let i = 0; i < joursDeLaSemaine.length; i++) {
    const element = joursDeLaSemaine[i];
    console.log("Jour " + i + " : " + element + ".");
}

// Exercice 2
function somRec(i) {
    if (i == 0) {
        return 0;
    } else {
        return i + somRec(i - 1);
    }
}
console.log("La somme des entiers de 1 à 10 est : " + somRec(10) + ".");

function somFor(i) {
    let somme = 0;
    for (let j = 1; j <= i; j++) {
        somme += j;
    }
    return somme;
}
console.log("La somme des entiers de 1 à 10 est : " + somFor(10) + ".");

let nombre = 0;
//nombre = prompt("Entrez un nombre : ");
//nombre = parseInt(nombre);
//console.log("La somme des entiers de 1 à " + nombre + " est : " + somRec(nombre) + ".");

// Exercice 3
window.onload = function() {
    // 1. Afficher le nom et la version du navigateur
    const navigateur = navigator.userAgent;
    console.log("Navigateur et version : " + navigateur);

    // 2. Afficher le titre du document
    const titre = document.title;
    console.log("Titre du document : " + titre);

    // 3. Afficher la date de dernière modification
    const derniereModif = document.lastModified;
    console.log("Date de dernière modification : " + derniereModif);

    // Afficher les informations dans la page
    document.getElementById('navigateur').textContent = "Navigateur et version : " + navigateur;
    document.getElementById('titre').textContent = "Titre du document : " + titre;
    document.getElementById('modification').textContent = "Date de dernière modification : " + derniereModif;
}