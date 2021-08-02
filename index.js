const game = () => {
  let p_score = 0;
  let c_score = 0;
  // start game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button")
    const introScreen = document.querySelector(".intro")
    const match = document.querySelector(".match")

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn")
    })
  }

  const resetGame = () => {
    const resetButton = document.querySelector(".reset button")
    const playerScore = document.querySelector(".player-score p")
    const computerScore = document.querySelector(".computer-score p")
    resetButton.addEventListener("click", function () {
      p_score = 0
      c_score = 0
      playerScore.textContent = p_score
      computerScore.textContent = c_score
    })
  }
  //play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    let computerOptions = ["rock", "paper", "scissors"]

    options.forEach(option => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p")
    const computerScore = document.querySelector(".computer-score p")
    playerScore.textContent = p_score;
    computerScore.textContent = c_score;
  }
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner")
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player-Win"
        p_score++
        updateScore()
        return;
      } else {
        winner.textContent = "Computer Win"
        c_score++
        updateScore()
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Win"
        c_score++
        updateScore()
        return;
      } else {
        winner.textContent = "Player Win"
        p_score++
        updateScore()
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Win"
        c_score++
        updateScore()
        return;
      } else {
        winner.textContent = "Player Win"
        p_score++
        updateScore()
        return;
      }
    }
  }
  startGame();
  playMatch()
  resetGame();
}

game()

