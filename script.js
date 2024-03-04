const keys = document.querySelectorAll('.key');
const displayInput = document.querySelector('.display .input');
const displayOutput = document.querySelector('.display .output');

let initialInput ="";
let output = "";
keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.dataset.key;
        if(value === "="){
            output = calculate(initialInput);
            displayOutput.innerHTML = output;
        } else {
            initialInput += value;
            displayInput.innerHTML = initialInput;
        };
    });
});

function calculate(input){
    try {
        // console.log(eval(input))
        // Use eval to evaluate the input string as a JavaScript expression
        return eval(input);
    } catch (error) {
        // Handle any errors that may occur during evaluation
        // console.error("Error calculating result:", error);
        return "Error";
    }
}