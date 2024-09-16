document.addEventListener("DOMContentLoaded", function(){

let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors")
let p_s = document.querySelector("#p_s")
let c_s = document.querySelector("#c_s")
let pl = document.querySelector("#p")
let cp = document.querySelector("#c")
let q = document.querySelector("#q")

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice==0) return "Rock";
    else if (choice==1) return "Paper";
    else return "Scissors";
}

let humanScore = 0, computerScore =0

function playRound(choice){
    let humanChoice = choice;
    let computerChoice = getComputerChoice();
    pl.textContent = 'You chose: '+humanChoice
    cp.textContent = "Computer chose: "+computerChoice
    if (humanChoice==computerChoice) q.textContent = "It's a draw!";
    else if (humanChoice=="Rock"){
        if (computerChoice=="Paper"){
            q.textContent = "Paper beats Rock!🎉"
            computerScore++;
        }
        else{
            q.textContent = "Rock beats Scissors!🎉"
            humanScore++;
        }
    }
    else if (humanChoice=="Paper"){
        if (computerChoice=="Scissors"){
            q.textContent = "Scissors beats Paper!🎉"
            computerScore++;
        }
        else{
            q.textContent = "Paper beats Rock!🎉"
            humanScore++;
        }
    }
    else if (humanChoice=="Scissors"){
        if (computerChoice=="Rock"){
            q.textContent = "Rock beats Scissors!🎉"
            computerScore++;
        }
        else{
            q.textContent = "Scissors beats Paper!🎉"
            humanScore++;
        }
    }
    p_s.textContent = humanScore;
    c_s.textContent = computerScore;
}

rock.addEventListener("click",()=>playRound("Rock"))
paper.addEventListener("click",()=>playRound("Paper"))
scissors.addEventListener("click",()=>playRound("Scissors"))

})