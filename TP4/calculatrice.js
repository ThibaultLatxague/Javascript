const output = document.getElementById("result");
let expression = "";
let resultat = false;

function updateDisplay() {
    output.value = expression;
}

function isOperator(char) {
    return /[\+\-\x\x\*\÷]/.test(char);
}

function sanitizeExpression(expr) {
    return expr.replace(/÷/g, "/").replace(/x/g, "*");
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        if (value === "=") {
            try {
                if (isOperator(expression.slice(-1))) {
                    throw new Error("Expression mal formée !");
                }
                expression = eval(sanitizeExpression(expression)).toString();
                resultat = true;
            } catch (error) {
                alert("Erreur : Expression mal formée !");
                expression = "";
            }
        } else if (value === "AC") {
            expression = "";
        } else {
            if (resultat && value !== "." && !isOperator(value)) {
                expression = value;
                resultat = false;
            } else {
                const lastChar = expression.slice(-1);
                if (isOperator(lastChar) && isOperator(value)) return;
                if (value === "." && expression.split(/[\+\-\x\÷]/).pop().includes(".")) return;
                expression += value;
                resultat = false;
            }
        }
        updateDisplay();
    });
});

// Gestion de la saisie au clavier
output.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        try {
            if (isOperator(expression.slice(-1))) {
                throw new Error("Expression mal formée !");
            }
            expression = eval(sanitizeExpression(expression)).toString();
            resultat = true;
        } catch (error) {
            alert("Erreur : Expression mal formée !");
            expression = "";
        }
        updateDisplay();
    } else if (event.key === "Backspace") {
        expression = expression.slice(0, -1);
        updateDisplay();
    } else if (/[\d\+\-\*/.]/.test(event.key)) {
        event.preventDefault();

        let key = event.key;
        if (key === "*") key = "x";
        if (key === "/") key = "÷";

        if (isOperator(expression.slice(-1)) && isOperator(key)) return;
        if (key === "." && expression.split(/[\+\-\x\÷]/).pop().includes(".")) return;

        expression += key;
        updateDisplay();
    }
});

// Empêche l'entrée de caractères non valides via copier-coller ou modification directe
output.addEventListener("input", () => {
    expression = output.value.replace(/[^0-9\+\-\x\÷\.]/g, "");
    updateDisplay();
});
