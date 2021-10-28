var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    

};

function updateCalorie() {
    var cal = $('calorie').value;
    var radios = document.getElementsByName('days');

    if (cal == 0 || undefined) {

        alert("Enter a valid number")

        // Clear days form
        $('days').reset()

    } else {

        // Itterate through each radio button with the name 'days'
        for (var i = 0; i < radios.length; i++) {
            if(radios[i].checked) {
                calories[days.indexOf(radios[i].id)] = cal;
            }
        }

        displayResults()
    }

}

function showAverageCalories() {
    var avg = 0;

    for (var i = 0; i < calories.length; i++) {
        avg += parseInt(calories[i]);
    }
    console.log(avg)
    avg = avg / calories.length;
    avg = avg.toFixed(2);

    $('result-txt').style.background = 'transparent'
    $('result-txt').style.color = 'green';
    $('result-txt').value = avg;

}

function showMax() {

    var maxCal = 0;
    var dayIndex;

    for (var i = 0; i < calories.length; i++) {
        if (calories[i] > maxCal) { 
            maxCal = calories[i]; 
            dayIndex = i;
        }
    }

    // If the paragraph already exists, update it instead
    if($('max')) {
        $('max').innerHTML = 'Your maximum calorie consumed calorie is ' + maxCal + " on " + days[dayIndex];
        return;
    }

    var para = document.createElement('p');
    para.innerHTML = 'Your maximum calorie consumed calorie is ' + maxCal + " on " + days[dayIndex];
    para.id = 'max'
    $('showMax').append(para)
    
}

function displayResults() {
    var updatedCal = "";

    for (var i = 0; i < calories.length-1; i++) {
        updatedCal = updatedCal + calories[i] + ", ";
    }

    updatedCal += calories[calories.length-1];

    alert("Your updated calorie details are \n" + updatedCal)

}

