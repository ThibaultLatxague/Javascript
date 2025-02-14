let btnDemanderLongueurLargeur = document.getElementById("btnDemanderLongueurLargeur");

btnDemanderLongueurLargeur.addEventListener('click', function() {
    let resultat = document.getElementById("resultat");
    var nombreAMultiplier = document.getElementById("nombre").value;
    if(nombreAMultiplier){
        var result;
        for (let i = 1; i <= 10; i++) {
            var r = nombreAMultiplier * i;
            result += nombreAMultiplier + " x " + i + " = " + r + "<br>";
        }
        resultat.innerHTML = result;
    } else {
        resultat.innerHTML = "Veuillez entrer un nombre entier";
    }
});