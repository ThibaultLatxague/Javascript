let btnCreerBoutons = document.getElementById("btnCreerBoutons");

// Génération des boutons en fonction du nombre saisi
btnCreerBoutons.addEventListener('click', function() {
    let nbrBoutons = document.getElementById('nbrBoutons').value;
    for (let i = 0; i < nbrBoutons; i++) {
        let bouton = document.createElement('input');
        bouton.type = 'button';
        bouton.value = 'Bouton ' + (i + 1);
        document.body.appendChild(bouton);
    }
});