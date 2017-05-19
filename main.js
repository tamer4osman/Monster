var warning = function () {
    alert("I didn't understand you, please play again.")
}
var win = function () {
    alert("You win!!!!")
}
var lose = function () {
    alert("You lose :-(")
}
var fight = function () {
    var question = 'Are you strong?'
    var instructions = 'YES or NO?'
    var answer = prompt(question, instructions).toUpperCase()
    if (answer === 'YES') {
        win()
    } else if (answer === 'NO') {
        lose()
    } else {
        warning()
    }
}
var run = function () {
    var question = 'Are you fast?'
    var instructions = 'YES or NO?'
    var answer = prompt(question, instructions).toUpperCase()
    if (answer === 'YES') {
        win()
    } else if (answer === 'NO') {
        lose()
    } else {
        warning()
    }
}
var pay = function () {
    var question = 'Do you have 100 Euro?'
    var instructions = 'YES or NO?'
    var answer = prompt(question, instructions).toUpperCase()
    if (answer === 'YES') {
        win()
    } else if (answer === 'NO') {
        lose()
    } else {
        warning()
    }
}
var monsters = function () {
    var question = 'You are walking through the forest when a monster jumps out. "None shall pass!" he says, "Unless, of course, you pay me 100 EUR"'
    var instructions = "Do you FIGHT, PAY or RUN?"
    var answer = prompt(question, instructions).toUpperCase()

    if (answer === "FIGHT") {
        console.log("you fight")
        fight()
    } else if (answer === "RUN") {
        console.log("you run")
        run()
    } else if (answer === "PAY") {
        console.log("you pay")
        pay()
    } else {
        warning()
    }
}

document.getElementById("monsters").onclick = monsters;      