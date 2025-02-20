const output = document.getElementById("result");
let expression = "";

console.log(output.value);

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        console.log(value);

        if (value === "=") {
            if(expression !== "") {
                expression = eval(expression);
            } else {
                eval(output.value);
                expression = eval(output.value);
            }
        } else if (value === "AC") {
            expression = ""; // Réinitialiser
        } else {
            expression += value;
        }

        console.log(expression);
        output.value = expression;
    });
});