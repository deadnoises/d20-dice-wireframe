const diceNumber = document.getElementById("diceNumber");
const rollButton = document.getElementById("rollButton");

function d20 () {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);

    diceNumber.innerHTML = randomNumber;
}

function buttonTextMorph () {
    const chance = Math.floor(Math.random() * 100) + 1;
    if (chance >= 33 && chance <= 54) {
        rollButton.innerHTML = "roll.";
    } else {
        if (chance >= 30 && chance <= 32) {
        rollButton.innerHTML = "ROLL, HUMAN";
        } else {
            if (chance >= 15 && chance <= 29) {
                rollButton.innerHTML = "you don't dare roll again";
            } else {
                if (chance >= 10 && chance <= 14) {
                    rollButton.innerHTML = "#DIC3_ROLL_T3XT";
                } else {
                    if (chance >= 1 && chance <= 3) {
                        rollButton.innerHTML = "Ṟ̸̥͍̼̟̜̅͂̓͐̐̔̀͆̄̋͘ ̷̳̍̽͑̈́̉̈́̀͒̍O̶̭̟̲͉̟̭̲̘̲̼͍͇͉͊͂̓͂̎̔̈́͊̄̕͝ ̵̢̭̫̭͖͓̣̺͖͖́͋̊͛̓͊͘̚̚͜͜͜͝L̸̨͎̟̹͚̰̼̃̋̈̊̋̋͋͋͒͝͠ ̴̧̱̼̒̒͊̿͌̄́̆͘L̵̨̨̧̨̙̤͈͓̫͙͓̹̯̲͗͜";
                    } else {
                        rollButton.innerHTML = "Roll";
                    }
                }
            }
        }
    }
}

//fetch('')
//  .then(response => response.text())
//  .then((data) => {
//    console.log(data)
//  })

function randomQuotes () {
}

function rollDice () {
    d20();
    buttonTextMorph();
}

rollButton.addEventListener("click", rollDice)