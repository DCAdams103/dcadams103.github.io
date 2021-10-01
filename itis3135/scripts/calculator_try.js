/*
    Made by: Dylan Adams
    Only help received was from stackoverflow for rounding numbers, removing trailing zeros, and emptying arrays.
*/

let calculation = ' ' // The string that goes into the result box 
let allowSymbol = false; // A boolean that won't allow you to type an operator until a number has been pressed
const numbers = [] // An array of numbers used in the calculations
const partials = [] // Digits of the numbers which are later combined in makeLargerNum()
const operators = [] // Operators used in the operation.
const tempOp = []; // When doing PEMDAS, this operator is used in the partial calculation
const tempNums = []; // When doing PEMDAS, these numbers are used in the partial calculation

// Adds the numbers and . to the calculation string, adds the digits to the partials array, then updates the result window
function addNum(num) {

    calculation += num;
    
    partials.push(num)

    if(num != '.') {
        allowSymbol = true;
    }

    updateResult(calculation)
}

// Adds the operator the the calculation string, operators array, then updates the result window.
function addOperator(op) {

    if(allowSymbol){
        calculation += ' ';
        calculation += op;
        calculation += ' ';
        operators.push(op);

        allowSymbol = false;
        
        // Pressing an operator button indicates that the previous number is done being entered.
        makeLargerNum()
    
        updateResult(calculation)
    }
    
}

// Combines all elements of the partials array into a larger number then adds it to the numbers array
function makeLargerNum() {

    let num = ''
    for(let i = 0; i < partials.length; i++) {
        num += partials[i].toString();
    }

    partials.length = 0;

    numbers.push(parseFloat(num))
    
}

// Clears the result window and resets all the arrays and variables.
function clearResult() {

    calculation = ' '
    allowSymbol = false;
    numbers.length = partials.length = operators.length = tempOp.length = tempNums.length = 0;

    updateResult(calculation)
}

// Scans the operators array and follows the PEMDAS order of operations.
function calculateInOrder() {

    /* PEMDAS */

    // As long as there are operators in the array, there are calculations to be done.
    while(operators.length >= 1) {

        /* Do all multiplication first */
        scanOps('x')

        /* Next do division */
        scanOps('/')

        /* Addition */
        scanOps('+')

        /* Subtraction */
        scanOps('-')

    }

    /* 
        parseFloat gets rid of trailing zeros on whole numbers
        Math.round rounds the number to two decimal places.
    */
    updateResult(parseFloat((Math.round(numbers[0] * 100) / 100)))

}

// Calculates the numbers around the given operator then removes it from the operators array.
function scanOps(op){ 
    for(let i = 0; i < operators.length; i++) {
        if(operators[i] == op) {

            // Uses this operator for the partial calculation 
            tempOp.push(operators[i]);

            // Deletes the x from the operators array
            operators.splice(i, 1)

            // Calculates the numbers surrounding the given operator
            partialCalc(numbers[i], numbers[i+1], tempOp[0], i)
            
        }
    }
}

/* Calculates the given numbers by the given operator, 
then replaces those two numbers with their result in the numbers array. */
function partialCalc(num1, num2, op, start) {

    let answer = 0.0;

    // Determine which operator is used 
    switch(op){
        case('+'):
            answer = num1 + num2;
            break;
        case('-'):
            answer = num1 - num2;
            break;
        case('x'):
            answer = num1 * num2;
            break;
        case('/'):
            answer = num1 / num2;
            break;
    }    

    // Replaces the two numbers in the numbers array with the answer calculated above.
    numbers.splice(start, 2, answer)

    // Clears the temporary operator array.
    tempOp.length = 0;

}

// Called when pressing the equals button.
function calculateResult() {

    // The last number is made into a larger number if it was more than one digit.
    makeLargerNum()

    // Call this function to do all the calculations in order according to PEMDAS.
    calculateInOrder()

}

// Function that updates the paragraph element inside the calculators result window.
function updateResult(result) {
    document.getElementById('result').innerHTML = result;
}