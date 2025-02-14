let btnCheckAleatoire = document.getElementById("btnCheckAleatoire");
let btnCalculer2 = document.getElementById("btnCalculer2");
let btnTirageAleatoire = document.getElementById("btnTirageAleatoire");

// Fonction qui retourne le maximum de deux nombress
function max(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Fonction qui retourne le maximum de deux nombres si les paramètres sont des nombres
function calculer(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return max(a,b);
    } else {
        return "Erreur les paramètres doivent être des nombres";
    }
}

// Fonction qui retourne le maximum de deux nombres a partir d'un form
btnCalculer2.addEventListener('click', function() {
    let a = document.getElementById('saisie1').value;
    let b = document.getElementById('saisie2').value;
    alert(calculer(a,b));
});

// Fonction qui retourne le maximum de 4 nombres si les paramètres sont des nombres
function max4(a, b, c, d) {
    return max(max(a,b), max(c,d));
}

// Fonction qui retourne le maximum de 8 nombres si les paramètres sont des nombres
function max8(a, b, c, d, e, f, g, h) {
    return max(max4(a,b,c,d), max4(e,f,g,h));
}

// Fonction qui retourne une valeur aléatoire entre a et b
function aleatoire(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Fonction qui affiche si notre trouvé = nombre aléatoire
btnCheckAleatoire.addEventListener('click', function () {
    let nombre = document.getElementById('nombreTrouve').value;
    let nombreAleatoire = aleatoire(1, 100);
    if (nombre == nombreAleatoire) {
        document.getElementById('message').innerHTML = "Gagne";
    } else {
        document.getElementById('message').innerHTML = "Perdu " + nombreAleatoire;
    }
});

// Proposez une page HTML/Javascript qui tire un nombre au hasard, puis attend la saisie de k nombres successifs en indiquant s'ils sont trop grands ou trop petits.
btnTirageAleatoire.addEventListener('click', function() {
    let nombreAleatoire = aleatoire(1, 100);
    let nombre = 0;
    let i = 0;
    while (nombre != nombreAleatoire) {
        nombre = prompt("Entrez un nombre");
        if (nombre < nombreAleatoire) {
            alert("Trop petit");
        } else if (nombre > nombreAleatoire) {
            alert("Trop grand");
        }
        i++;
    }
    alert("Gagne en " + i + " coups");
});