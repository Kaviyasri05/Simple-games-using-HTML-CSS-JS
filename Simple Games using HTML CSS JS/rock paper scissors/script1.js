let result = document.getElementById("result");
let you = document.getElementById("you");
let computer = document.getElementById("computer");
let rock = "🪨";
let paper = "📄";
let scissors = "✂️";

function computerMove(){
    const move = Math.random();
    if(move<1/3)return rock;  
    else if(move>=1/3 && move<2/3) return paper;
    else return scissors;
}
function winOrLose(u,c) {
    if(u === c) {
        result.innerHTML = "It's a tie!";
        console.log("It's a tie!");
    }
    else if((u === rock && c === scissors) || (u === paper && c === rock) || (u === scissors && c === paper)) {
        result.innerHTML = "You win this round!";
        console.log("You win this round!");
    }
    else if((u === rock && c === paper) || (u === paper && c === scissors) || (u === scissors && c === rock)) {
        result.innerHTML = "You lose this round!";
        console.log("You lose this round!");
    }
}
document.getElementById("rock").onclick = function() {
    const comp = computerMove();
    console.log("You move: rock \nComputer move: " + comp);
    you.innerHTML = "You: " + rock;
    computer.innerHTML = "Computer: " + comp;
    winOrLose(rock,comp);

}
document.getElementById("paper").onclick = function() {
    const comp = computerMove();
    console.log("You move: paper \nComputer move: " + comp);
    you.innerHTML = "You: " + paper;
    computer.innerHTML = "Computer: " + comp;
    winOrLose(paper,comp);
}
document.getElementById("scissors").onclick = function() {
    const comp = computerMove();
    console.log("You move: scissors \nComputer move: " + comp);
    you.innerHTML = "You: " + scissors;
    computer.innerHTML = "Computer: " + comp;
    winOrLose(scissors,comp);
}
