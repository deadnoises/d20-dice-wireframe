const diceNumber = document.getElementById("diceNumber");
const rollButton = document.getElementById("rollButton");
const wireframeContainer = document.getElementById("wireframeContainer");

function generating () {
    diceNumber.innerHTML = `<p id="rollingText">generating...</p>`;
    wireframeContainer.innerHTML = '<video autoplay src="./media/diceanim.mp4" id="wireframeAnim"></video>'
}

function d20 () {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    diceNumber.innerHTML = randomNumber;
    wireframeContainer.innerHTML = `<img src="./media/diceRender.png"  id="wireframeStatic"/>`
}

//this section randomizes the button text

function buttonTextMorph () {
    const chance = Math.floor(Math.random() * 100) + 1;
    if (chance >= 33 && chance <= 54) {
        rollButton.innerHTML = "roll.";
    } else {
        if (chance >= 30 && chance <= 32) {
        rollButton.innerHTML = "R O L L. H U M A N.";
        } else {
            if (chance >= 15 && chance <= 20) {
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


function rollDice () {
    quote.innerHTML = "";
    generating();
    setTimeout(d20, 2500)
    setTimeout(buttonTextMorph, 2500);
    setTimeout(randomQuote, 2500)
}

rollButton.addEventListener("click", rollDice)