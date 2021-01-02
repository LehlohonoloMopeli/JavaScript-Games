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