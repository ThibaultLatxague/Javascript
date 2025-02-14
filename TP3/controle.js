let btnGenererFenetres = document.getElementById("btnGenererFenetres");

function genererFenetres() {
    const largeur = 500;
    const hauteur = 500;

    // Position aléatoire sur l'écran
    let posX = Math.floor(Math.random() * (window.screen.width - largeur));
    let posY = Math.floor(Math.random() * (window.screen.height - hauteur));

    // Créer une nouvelle fenêtre
    let nouvelleFenetre = window.open("", "", `width=${largeur},height=${hauteur},top=${posY},left=${posX}`);

    // Ajouter une image de fond à la fenêtre
    if (nouvelleFenetre) {
        nouvelleFenetre.document.body.style.margin = "0";
        nouvelleFenetre.document.body.style.padding = "0";
        nouvelleFenetre.document.body.style.backgroundImage = "url('https://wallpaper.forfun.com/fetch/87/87c93aa33275b4c8c73637ad3fbee836.jpeg')";
        nouvelleFenetre.document.body.style.backgroundSize = "cover";
        nouvelleFenetre.document.body.style.backgroundPosition = "center";
        nouvelleFenetre.document.body.style.height = "100%";
    }
}

btnGenererFenetres.addEventListener('click', function() {
    for (let i = 0; i < 10; i++) {
        genererFenetres();
    }
});