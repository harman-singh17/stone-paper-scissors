let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let user_score = document.querySelector(".score");
let comp_score = document.querySelector(".computer-score");
let resetButton = document.querySelector("#reset");

let userScore = 0;
let compScore = 0;

resetButton.addEventListener("click", () => {
    comp_score.innerText = "0";
    user_score.innerText = "0";
    userScore = 0;
    compScore = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "rgb(103, 65, 136)";
});

let computer = () => {
    let arr = ["Rock", "Paper", "Scissors"];
    let compGuess = Math.floor(Math.random() * 3);
    return arr[compGuess];
};

let showText = (winner, computerChoice, userChoice) => {
    if (winner) {
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = `Lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

let showWinner = (computerChoice, userChoice) => {
    if (computerChoice === userChoice) {
        msg.innerText = "Draw! Play again";
        msg.style.backgroundColor = "rgb(34, 5, 61)";
    } else {
        let winner = true;

        if (userChoice === "Rock") {
            winner = computerChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            winner = computerChoice === "Scissors" ? false : true;
        } else {
            winner = computerChoice === "Rock" ? false : true;
        }

        showText(winner, computerChoice, userChoice);
    }
};

let choice = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        let compChoice = computer();

        showWinner(compChoice, userChoice);
    });
});
