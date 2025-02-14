let couleurSelect = document.getElementById("couleurSelect");

// Fonction pour changer la couleur de fond en fonction de la sélection
couleurSelect.addEventListener('change', function() {
    const select = document.getElementById("couleurSelect");
    const couleur = select.value;
    document.body.style.backgroundColor = couleur;
});