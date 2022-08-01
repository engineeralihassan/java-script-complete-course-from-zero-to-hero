"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
let pName1 = document.querySelector("#name--0");
let pName2 = document.querySelector("#name--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let player2Name;
let player1Name;

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.style.display = "none";
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    //     diceEl.classList.remove("hidden");
    diceEl.style.display = "block";
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 10) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      if (activePlayer === 0) {
        let ma = (document.querySelector(".mainsection").style.display =
          "none");
        document.querySelector(".messageWin").style.display = "block";

        document.querySelector(".plName").textContent = `@${player1Name}`;
      } else {
        let ma = (document.querySelector(".mainsection").style.display =
          "none");
        document.querySelector(".messageWin").style.display = "block";

        document.querySelector(".plName").textContent = `@${player2Name}`;
      }
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
let btn = document.querySelector(".btnplay");
btn.addEventListener("click", function () {
  player1Name = document.querySelector(".pl1").value;
  player2Name = document.querySelector(".pl2").value;
  pName1.textContent = player1Name;
  pName2.textContent = player2Name;

  document.querySelector(".mainform").style.display = "none";

  console.log(player1Name, player2Name);
});
let goback = document.querySelector(".goback");
goback.addEventListener("click", function () {
  location.assign("index.html");
});
