const output = document.getElementById("result");
let expression = "";

function updateDisplay() {
    output.value = expression;
}

function isOperator(char) {
    return /[\+\-\×\÷]/.test(char);
}

function sanitizeExpression(expr) {
    return expr.replace(/÷/g, "/").replace(/×/g, "*");
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
            } catch (error) {
                alert("Erreur : Expression mal formée !");
                expression = "";
            }
        } else if (value === "AC") {
            expression = "";
        } else {
            const lastChar = expression.slice(-1);

            if (isOperator(lastChar) && isOperator(value)) return;
            
            if (value === "." && expression.split(/[\+\-\×\÷]/).pop().includes(".")) return;
            
            expression += value;
        }

        updateDisplay();
    });
});

output.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".btn:contains('=')").click();
    } else if (event.key === "Backspace") {
        expression = expression.slice(0, -1);
        updateDisplay();
    } else if (/[\d\+\-\*/.]/.test(event.key)) {
        event.preventDefault();

        let key = event.key.replace("*", "×").replace("/", "÷");

        if (isOperator(expression.slice(-1)) && isOperator(key)) return;
        if (key === "." && expression.split(/[\+\-\×\÷]/).pop().includes(".")) return;

        expression += key;
        updateDisplay();
    }
});

output.addEventListener("input", (event) => {
    output.value = output.value.replace(/[^0-9\+\-\×\÷\.]/g, "");
    expression = output.value;
});