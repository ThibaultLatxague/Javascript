let btnRemplir = document.getElementById("btnRemplir");
let btnMarquer = document.getElementById("btnMarquer");
let btnListe2Tab = document.getElementById("btnListe2Tab");

// Génération des boutons en fonction du nombre saisi
btnRemplir.addEventListener('click', function() {
    let x = document.getElementById('nbrBoutons').value;
    var select = document.getElementById('select');
    console.log("Remplir appelle");
    let elt = document.createElement('option');
    elt.text = x;
    select.add(elt);
});

// Fonction qui marque un élément de la liste
btnMarquer.addEventListener('click', function() {
    let x = document.getElementById('nbrBoutons').value;
    var select = document.getElementById('select'); // Récupère le <select>
    Array.from(select.options).forEach(elt => { // Parcourt les options du <select>
        if (elt.textContent === x) { // Vérifie si le texte correspond
            elt.style.backgroundColor = 'red'; // Change la couleur d'arrière-plan
        }
    });
});

// Fonction qui transforme une liste en tableau
btnListe2Tab.addEventListener('click', function() {
    var select = document.getElementById('select'); // Récupère le <select>
    var tab = [];
    Array.from(select.options).forEach(elt => { // Parcourt les options du <select>
        tab.push(elt.textContent); // Ajoute le texte de l'option au tableau
    });
    console.log(tab);
});