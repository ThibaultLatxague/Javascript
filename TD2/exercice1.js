let btnTri = document.getElementById("btnTri");
let btnAffiche2 = document.getElementById("btnAffiche2");
let btnAffiche = document.getElementById("btnAffiche");

var a = 3;
var b = 2;
var tab = [-2, 1, 4];

btnAffiche.addEventListener("click", function() {
    alert(multiplie(a, b));
    alert(multiplie(b));
});

btnAffiche2.addEventListener("click", function() {
    tab.forEach(elt => {
        alert(multiplie2(elt));
    });
});

btnTri.addEventListener("click", function() {
    alert(tab.sort((a, b) => a - b));
});

function multiplie2(x) {
    tabResultat = [];
    tab.forEach(elt => {
        tabResultat.push(elt * x);
    });
    return tabResultat;
}

function multiplie(x = 8, y = 9) {
    return x * y;
}