// Your age in days challenge

function ageInDays() {
    var birthYear = prompt("What is your birth year?");
    var birthMonth = prompt("What is your birth month?");
    var birthDay = prompt("What day of the month were you born in?");

    // Assume today is 01/01/2021
    var numDays = (2020 - birthYear)*365 + (01 - birthMonth)*12 + (01 - birthDay);
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("Your are " + numDays + " days old!");
    h1.setAttribute("id", "numDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById("numDays").remove();
}


// Challenge  2

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];                                    // Copies all original classes and puts them in a list
for (let i=0; i < all_buttons.length; i++) {            
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonChange) {
    if (buttonChange.value === 'red') {
        buttonsRed();
    }
    else if (buttonChange.value === 'green') {
        buttonsGreen();
    }
    else if (buttonChange.value ==='reset') {
        buttonsReset();
    }
    else if (buttonChange.value ==='random') {
        buttonsRandom();
    }
}

function buttonsRed() {
    for( i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonsGreen() {
    for( i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonsReset() {
    for( i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}

function buttonsRandom() {
   
    let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success']

    for( i=0; i < all_buttons.length; i++) {
        let randomNum = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNum])
    }
}