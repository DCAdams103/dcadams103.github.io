const persons = []
const salaries = []

// Drop-down menu
var select;

function validateInput() {
    
    var acceptable = true;

    var person = document.getElementById('name').value
    var salary = document.getElementById('salary').value

    if(person == '' || person == undefined) {
        alert("Please enter a person's name.")
        acceptable = false;
    }

    // Removes commas from salary.
    salary = parseInt(salary.replaceAll(',', ''));

    if(isNaN(salary)) {
        alert("Please enter a number for the salary.")
        acceptable = false;
    }

    // If both variables are okay, then run the addSalary function
    if(acceptable){

        addSalary();

    }

}

function addSalary(){

    var person = document.getElementById('name').value;
    var salary = document.getElementById('salary').value;
    
    persons.push(person)

    // Drop-down menu
    select = document.getElementById('person_select')

    salaries.push(salary)

    // Add the person to the drop-down menu
    let op = document.createElement('option');
    op.innerHTML = persons[persons.length - 1];
    select.appendChild(op);

    // Add the eventListener AFTER the append so it gets the correct index in personSelectChange()
    select.addEventListener('change', personSelectChange());

    // Clear text fields
    document.getElementById('name').value = '';
    document.getElementById('salary').value = '';

}

function personSelectChange() {

    var result = document.getElementById('person_select_salary')

    // Since the first option is disabled, it doesn't count and therefore isn't included in the index.
    // Without this, it will try to find "-- Add a person and salary --" in the arrays.
    if(persons[select.selectedIndex-1] != undefined) {
        // Changes the paragraph element under the drop-down.
        result.innerHTML = persons[select.selectedIndex-1] + " has a salary of $" + salaries[select.selectedIndex-1]
    }
    console.log(select.selectedIndex)

}

function displayResults(){

    var highestSalary = 0;
    var averageSalary = 0;

    // Goes through each of the salaries elements to determine which is the highest. Also adds up all the salaries.
    for(var i = 0; i <= salaries.length - 1; i++) {
        
        if(salaries[i] > highestSalary) {
            highestSalary = salaries[i]
        }

        // Adds every salary together
        averageSalary += parseInt(salaries[i]);

    }
    console.log("AS" + averageSalary)

    // Gets the average salary by dividing the total salries by how many salaries are in the array.
    averageSalary /= salaries.length;

    // Round salary to two decimals if necessary.
    averageSalary = parseFloat((Math.round(averageSalary * 100) / 100))

    // Updates the result paragraph element.
    document.getElementById('results').innerHTML = "The highest salary is " + highestSalary + ", \n and the average salary is " +  averageSalary + ".";

}

function displaySalary(){

    // The table element
    var table = document.getElementById('results_table');
    var numOfRows = table.rows.length;

    // If there is more than just the header row, delete them (to prevent duplicating results)
    if(numOfRows > 1) {
        
        for(var i = 0; i < numOfRows-1; i++) {
            table.deleteRow(1)
        }
    }

    // For every element in the salaries array, add the person and their associated salary to the table.
    for(var i = 0; i < salaries.length; i++) {
        let row = table.insertRow(table.rows.length);
        row.insertCell(0).innerHTML = persons[i];
        row.insertCell(1).innerHTML = salaries[i];
    }
    
}