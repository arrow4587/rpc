let weapons = ["rock", "paper", "scissor"];
function computerPlay(weapons) {
    let choice = Math.floor(Math.random() * (3 - 0)) + 0;
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // your code here
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log("TIE");
        return 0;
    } else {
        if (playerSelection == "rock" && computerSelection == "scissor") {
            console.log("win");
            return 1;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("win");
            return 1;
        } else if (playerSelection == "scissor" && computerSelection == "paper") {
            console.log("win");
            return 1;
        } else {
            console.log("YOU LOOSE");
            return -1;
        }
    }
}
function game() {
    let pscore = 0;
    let cscore = 0;
    
    let round=5;
    for (let index = 0; index < 5; index++) {
        let rscore=0;
        const playerSelection = window.prompt("ENTER YOUR WEAPON")
        x = computerPlay(weapons);
        const computerSelection = weapons[x];
        console.log(playerSelection, computerSelection)
        rscore=playRound(playerSelection, computerSelection)

        if(rscore==1)
        {
            pscore=pscore+1;
        }
        else if(rscore==0){
            round=round-1

            
        }
        else
        {
            cscore=cscore+1
        }



    }
    console.log(pscore)
    console.log(cscore)


}

game();