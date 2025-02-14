"use strict";
var tableauListeInversee = [];
let btnListe = document.getElementById("btnListing");

onload = function(){
    tableauListeInversee.push("<XML http://monsite1.fr http://monsite2.fr>");
    tableauListeInversee.push("<XML http://monsite3.fr http://monsite4.fr>");
    tableauListeInversee.push("<Java http://monsite5.fr http://monsite6.fr>");
    tableauListeInversee.push("<Java http://monsite7.fr>");
}

btnListe.addEventListener('click', function() {
    let termeSaisi = document.getElementById("termeSaisi").value;
    let resultat = document.getElementById("resultat");
    resultat.innerHTML = "";
    tableauListeInversee.forEach(element => {
        const elt = element.split(" ");
        if (elt[0] === `<${termeSaisi}`) {
            elt.slice(1).forEach(lien => {
                const result = lien.includes(">") ? lien.split(">")[0] : lien;
                resultat.innerHTML += `<a href="${result}">${result}</a><br>`;
            });
        }
    });
});