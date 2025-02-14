let btnNombre = document.getElementById('btnDonnerNbrJoursMois');

btnNombre.addEventListener('click', function() {
    var année = prompt("Entrez l'année : ");
    var mois = prompt("Entrez le mois : ");
    var nombreJours = 0;
    switch (mois) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            nombreJours = 31;
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            nombreJours = 30;
            break;
        case "2":
            if ((année % 4 == 0 && année % 100 != 0) || année % 400 == 0) {
                nombreJours = 29;
            } else {
                nombreJours = 28;
            }
            break;
        default:
            alert("Mois invalide");
            break;
    }            
    alert("Le nombre de jours dans le mois " + nombreJours);
});