var userName;
var doing;

function questions() {
    setName(prompt("Please enter your name", "John Doe"))
    setDoing(prompt("How are you doing?", "Great!"))

    document.getElementById('desc').innerHTML = 'Today is: ' + getTodaysDate() + ', and the time is: ' + getCurrentTime();
    document.getElementById('intro').innerHTML = 'The Adams Studio welcomes you, ' + getName() + '!\n' + 
        "We're glad you are doing " + getDoing() + '!'; 
}

function setName(name){ 
    this.userName = name;
}

function setDoing(doing) {
    this.doing = doing;
}

function getName() {
    return userName;
}

function getDoing() {
    return doing;
}

function getTodaysDate() {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

function getCurrentTime() {
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}

function changeName() {
    setName(prompt('Wow you entered the wrong name? Don\'t worry, you can change it now!', 'John Doe'));

    document.getElementById('intro').innerHTML = 'The Adams Studio welcomes you, ' + getName() + '!\n' + 
        "We're glad you are doing " + getDoing() + '!'; 
}

function ranNum() {
    var num = Math.floor(Math.random() * 101)
    document.getElementById('randnum').innerHTML = num;
    return num
}

function reverseName() {
    document.getElementById('reversed').innerHTML = getName().split("").reverse().join("")
}

function oneWeekFromToday(){
    var today = new Date();
    var week = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('week').innerHTML = days[week.getDay()] + ', ' + months[week.getMonth()] + ' ' + week.getDate();
}

function randomColor(){
    let r = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    document.getElementById('color').style.backgroundColor = `rgb(${r},${g}, ${b})`;
}