"use strict";

let tableauDoublons = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10, 10, 7, 9];

const eliminerDoublons = (array) => {
    console.log("Tableau de départ : ", array);
    // Utilisation de Set pour éliminer les doublons
    const resultat = [...new Set(array)];
    return resultat;
};

console.log("Tableau d'arrivée : ", eliminerDoublons(tableauDoublons));