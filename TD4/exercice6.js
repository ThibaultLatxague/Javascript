let L = [1, 2, 3, 4, 5];
let M = [6, 7, 8, 9, 10];

let btnReverseL = document.getElementById("btnReverseL");
let btnReverseM = document.getElementById("btnReverseM");
let btnAppend = document.getElementById("btnAppend");
let btnFusion = document.getElementById("btnFusion");

btnReverseL.addEventListener('click', reverse(L));
btnReverseM.addEventListener('click', reverse(M));

// Fonction qui inverse les valeurs d'un vecteur
function reverse(L) {
    return L.reverse();
}

// Fonction qui ajoute un vecteur à un autre vecteur
btnAppend.addEventListener('click', function(L, M) {
    return L.concat(M);
});

// Fonction qui fusionne deux vecteurs et retourne un vecteur aevc ses valeurs triées
btnFusion.addEventListener('click', function(L, M) {
    return L.concat(M).sort();
});