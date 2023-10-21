const randomNumber = Math.floor(Math.random() * 100);
      let attempts = 0;
      let win = false;
  
      const guessInput = document.querySelector("#guess-input");
      const guessButton = document.querySelector("#guess-button");
      const message = document.querySelector("#message");
      const gif = document.querySelector("#gif");
      const gif1 = document.querySelector("#gif1");
      const playAgainButton = document.querySelector("#play-again-button");
  
      guessButton.addEventListener("click", () => {
        const guess = Number(guessInput.value);
        attempts++;
  
        if (guess === randomNumber) {
          message.textContent = "Tama ka ginoo!";
          gif1.style.display = "block";
          const audio = new Audio("win.mp3");
          audio.play();
          win = true;
          playAgainButton.style.display ="block"
          guessInput.style.display = "none";
          guessButton.style.display = "none";
        } else if (guess < randomNumber) {
          message.textContent = "Masyadong mababa ginoo.";
        } else {
          message.textContent = "Masyadong mataas ginoo.";
        }
  
        if (attempts === 5 && !win) {
          message.textContent = `Tanga ka kasi e, talo ka tuloy. Ang numero ay ${randomNumber}.`;
          gif.style.display = "block";
          const audio = new Audio("lose.mp3");
          audio.play();
          playAgainButton.style.display ="block"
          guessInput.style.display = "none";
          guessButton.style.display = "none";
        }

        if (guess !== randomNumber) {
            guessInput.value = "";
          }    
      });

      playAgainButton.addEventListener("click", () => {
        location.reload();
      });