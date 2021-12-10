/* 

All code is written by Dylan Adams

*/

function getShape() {

    /* Asks the user to enter a number */
    let inputNumber = prompt('The diabolical axolotl would like a number between 0 and 10: ');
    
    /* An infinite while loop that will only be broken if the function validateEntry returns true */
    while(!validateEntry(inputNumber)) 
    {

        /* Asks the user to enter a number */
        inputNumber = prompt('The diabolical axolotl would like a number between 0 and 10: ');

    }

    inputNumber = Math.abs(Math.round(inputNumber))

    /* Matches the number with the name of the polygon. */
    let result = ''
    switch(inputNumber)
    {
        case(0):
            result = 'Nothing exists with 0 sides!'
            break;
        case(1):
            result = 'Monogon'
            break;
        case(2):
            result = 'Digon'
            break;
        case(3):
            result = 'Trigon (or Triangle)'
            break;
        case(4):
            result = 'Quadrilateral (or Tetragon)'
            break;
        case(5):
            result = 'Pentagon'
            break;
        case(6):
            result = 'Hexagon'
            break;
        case(7):
            result = 'Heptagon (or Septagon)'
            break;
        case(8):
            result = 'Octagon'
            break;
        case(9):
            result = 'Nonagon (or Enneagon)'
            break;
        case(10):
            result = 'Decagon'
            break;
        default:
            result = 'Uh-Oh! Try again.'
            break;
        
    }

    /* Tells the user the name of their polygon through an alert and a paragraph element. */
    //alert("Your polygon's name is: " + result)
    dalert.alert("Your polygon's name is: " + result);
    document.getElementById('polygon-result').innerHTML = "Your polygon's name is: " + result
    
}

/* Checks to see if the input is valid, if so it returns true. */
function validateEntry(inputNum){

    /* If not within the range, or not a number, it will alert the user to enter a correct number. */
    try 
    {
        inputNum = Math.abs(Math.round(inputNum))
        if(inputNum >= 0 && inputNum <= 10)
        {
            return true;
        }
        else 
        {
            dalert.alert('Please enter a correct number.')
            return false;
        }
        
    } 
    catch(error) 
    {
        alert(error)
    }

}