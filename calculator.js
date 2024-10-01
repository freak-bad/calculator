
function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace(){
   const display = document.getElementById('display');
   display.value = display.value.slice(0,-1);
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function chooseOperator(operator) {
    const display = document.getElementById("display");
    const currentValue = display.value;
    const lastChar = currentValue[currentValue.length - 1];
    if (currentValue && !isNaN(lastChar)) {
        display.value += operator;
    }
}

function result() {
    const display = document.getElementById("display");
    const currentValue = display.value;

    if (currentValue) {
        const evaluation = eval(currentValue);

        if (!isNaN(evaluation)) {
            display.value = evaluation;
        } else {
            display.value = "Error";
        }
    } else {
        display.value = "Error"; 
    }
}
