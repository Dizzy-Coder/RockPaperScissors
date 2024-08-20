function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice==0) return "Rock";
    else if (choice==1) return "Paper";
    else return "Scissors";
}

function getHumanChoice(){
    let choice = Number(prompt("Enter Number to choose:\n1. Rock\n2. Paper\n3. Scissors"),"");
    if (choice==1) return "Rock";
    else if (choice==2) return "Paper";
    else if (choice==3) return "Scissors";
    else {
        alert("Invalid response. Please try again.")
        return 0;
    }
}

let humanScore = 0, computerScore =0;

function playRound(){
    let humanChoice = getHumanChoice();
    if (humanChoice==0){
        return 0;
    }
    let computerChoice = getComputerChoice();
    console.log('You chose: '+humanChoice);
    console.log("Computer chose: "+computerChoice);
    if (humanChoice==computerChoice) console.log("It's a draw!");
    else if (humanChoice=="Rock"){
        if (computerChoice=="Paper"){
            console.log("Paper beats Rock!");
            computerScore++;
        }
        else{
            console.log("Rock beats Scissors!");
            humanScore++;
        }
    }
    else if (humanChoice=="Paper"){
        if (computerChoice=="Scissors"){
            console.log("Scissors beats Paper!");
            computerScore++;
        }
        else{
            console.log("Paper beats Rock!");
            humanScore++;
        }
    }
    else if (humanChoice=="Scissors"){
        if (computerChoice=="Rock"){
            console.log("Rock beats Scissors!");
            computerScore++;
        }
        else{
            console.log("Scissors beats Paper!");
            humanScore++;
        }
    }
    console.log("You: "+humanScore+"    Computer: "+computerScore);
}

for (let i=0; i<5; i++){
    if (playRound()==0) i--;
}