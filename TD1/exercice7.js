let btnEvaluer = document.getElementById("btnEvaluer");
let btnAfficherEvaluer = document.getElementById("btnAfficherEvaluer");

btnEvaluer.addEventListener('click', function() {
    var input = document.getElementById("nombre").value;
    var resultat = document.getElementById("resultat");
    var result = eval(input);
    resultat.value = result;
});

btnAfficherEvaluer.addEventListener('click', function() {
    var input = document.getElementById("nombre").value;
    var result = eval(input);
    alert(result);
});