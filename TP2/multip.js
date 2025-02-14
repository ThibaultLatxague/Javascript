let btnVerifierCalculs = document.getElementById('btnVerifierCalculs');

btnVerifierCalculs.addEventListener('click', function() {
    let formulaire = document.getElementById('form');
    let mult1 = formulaire.mult1.value;
    let mult2 = formulaire.mult2.value;
    let mult3 = formulaire.mult3.value;
    let mult4 = formulaire.mult4.value;
    let nb1 = document.getElementById('nb1').textContent;
    let nb2 = document.getElementById('nb2').textContent;
    let nb3 = document.getElementById('nb3').textContent;
    let nb4 = document.getElementById('nb4').textContent;
    let nombreCorrespondances = 0;

    if(eval(nb1) == mult1) {
        nombreCorrespondances++;
    }
    if(eval(nb2) == mult2) {
        nombreCorrespondances++;
    }
    if(eval(nb3) == mult3) {
        nombreCorrespondances++;
    }
    if(eval(nb4) == mult4) {
        nombreCorrespondances++;
    }
    alert("Nombre de correspondances : " + nombreCorrespondances);
});