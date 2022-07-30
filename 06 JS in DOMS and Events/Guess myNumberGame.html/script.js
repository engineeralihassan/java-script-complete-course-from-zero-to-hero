"use strict";
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let high = document.querySelector(".highscore").textContent;
let high1;
let num = document.querySelector(".number");
// num.textContent = number;
document.querySelector(".check").addEventListener("click", function () {
  let y = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (!y) {
      document.querySelector(".message").textContent =
        "🎃Please Enter some Number";
    } else if (y === number) {
      if (high1 > score) {
        high1 = score;
        document.querySelector(".highscore").textContent = high1;
      }
      high1 = score;
      document.querySelector(".highscore").textContent = high1;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").style.backgroundColor = "#fff";
      document.querySelector(".number").textContent = number;
      document.querySelector(".message").textContent =
        "  🎉Hurray Correct number";
      high = score;
    }
    //     when diffrent
    else if (y !== number) {
      document.querySelector(".message").textContent =
        y > number ? "This number is  📈High " : "This number is  📈 Low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
      console.log(`The up : ${typeof score} : ${score}`);
    }
  } else {
    document.querySelector(".message").textContent = "you lose the game";
  }
});
// again check
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.backgroundColor = "#fff";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "  Guessing number ...";
  document.querySelector(".guess").value = "";
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
});
