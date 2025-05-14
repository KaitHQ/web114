//Tomira Jefferson | May 14, 2025

// Current time & date function runs at page load
const currentDateTime = new Date();
document.getElementById("time").textContent = currentDateTime.toLocaleString();

// Submit/Grade Button
document.querySelector('input[name="submit"]').addEventListener("click", function () {
  const name = document.querySelector('input[name="username"]').value.trim();
  const q1 = document.getElementById("answerq1").value; // Question 1
  const q2 = document.getElementById("answerq2").value; // Question 2
  const q3 = document.getElementById("answerq3").value; // Question 3

  const scoreOutput = document.createElement("p");
  const quizBox = document.querySelector(".quizbox"); // Element container

  // Clear away any old message result, when "Start Over/reset" button is clicked
  const oldMessage = document.querySelector(".resultMessage");
  if (oldMessage) oldMessage.remove();

  const oldAnswers = document.querySelector(".correctAnswers");
  if (oldAnswers) oldAnswers.remove();

  if (!name) { // Trigger this alert if name field is empty
    alert("Please enter your name before submitting the quiz.");
    return;
  }

  let score = 0; // Correct answers to compare the input by
  if (q1 === "B") score++;
  if (q2 === "D") score++;
  if (q3 === "B") score++;

  const percent = (score / 3) * 100; // Scoring scale
  const missed = 3 - score;

  let message = `Great job, ${name}! `; // If passing score, display this message
  if (missed === 0) {
    message += "You missed zero. You received a 100%!"; // and this grade
  } else { // But if user missed >= 1, then display the following message.
    message = `Yikes, ${name}! You missed ${missed}. You received a ${percent}%. Perhaps you should go back and review.`;
  }

// innerHTML styling
  scoreOutput.textContent = message;
  scoreOutput.className = "resultMessage";
  scoreOutput.style.fontFamily= "Segoe UI Symbol, Arial Unicode MS, sans-serif";
  scoreOutput.style.fontWeight = "bold";
  scoreOutput.style.marginTop = "15px";
  scoreOutput.style.color = missed === 0 ? "green" : "red";

  quizBox.appendChild(scoreOutput);

// Show correct answers to user
  const answersDiv = document.createElement("div");
  answersDiv.className = "correctAnswers";
  answersDiv.style.marginTop = "10px";

// Display correct answers using style below.  
  const answerList = `
    <h4>Correct Answers:</h4> 
    <ul>
      <li><strong>Q1:</strong> B. Adds life to your website</li>
      <li><strong>Q2:</strong> D. /* I love Javascript! */</li>
      <li><strong>Q3:</strong> B. Brendan Eich, 1995</li>
    </ul>
  `;

  answersDiv.innerHTML = answerList;
  quizBox.appendChild(answersDiv);
});


document.querySelector('input[name="reset"]').addEventListener("click", function () {
  const oldMessage = document.querySelector(".resultMessage");
  if (oldMessage) oldMessage.remove();

  const oldAnswers = document.querySelector(".correctAnswers");
  if (oldAnswers) oldAnswers.remove();
});

// End of script 