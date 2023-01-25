// Generating a random number
let rendomNum = Math.floor(Math.random() * 20 + 1);
let guessNum = (document.getElementById("guess").textContent = rendomNum);

// Status Area
let rightMessage = document.querySelector(".message");
let wrongMessage = document.querySelector(".message");

// Win Image
let winImage = document.getElementById("win");

// Hiding Image
let hidingImage = document.getElementById("hide");

// Reset Button
let resetBtn = document
  .querySelector("#again")
  .addEventListener("click", () => {
    location.reload();
  });

// Storing Final Result
let finalResult = document.getElementById("score");
let initialScore = 0;

// Varifying Output
let inputBtn = document.getElementById("input");
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  // Generating Final Attampt
  initialScore++;
  finalResult.textContent = initialScore;

  let guessOutput = inputBtn.value;
  if (guessOutput == guessNum) {
    rightMessage.textContent = "🎉 Correct Number";
    winImage.style.display = "block";
  } else if (guessOutput < guessNum) {
    wrongMessage.textContent = "😒 Its Low Number";
    winImage.style.display = "none";
    hidingImage.style.backgroundImage = "url('img/low.png')";
  } else if (guessOutput > guessNum) {
    wrongMessage.textContent = "😎 Its High Number";
    winImage.style.display = "none";
    hidingImage.style.backgroundImage = "url('img/high.png')";
  }
});
