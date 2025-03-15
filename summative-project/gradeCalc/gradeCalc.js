// Kevin 

const gradeForm = document.getElementById('gradeForm');
const resultDiv = document.getElementById('result');
const progressBar = document.getElementById('progressBar');

function a(event) {
  const totalPoints = Number(document.getElementById('totalPoints').value);
  const earnedPoints = Number(document.getElementById('earnedPoints').value);

  if (totalPoints <= 0 || earnedPoints > totalPoints) {
    resultDiv.textContent = "Please check your input values!";
    return;
  }

  const percentage = ((earnedPoints / totalPoints) * 100).toFixed(2);

  resultDiv.innerHTML = `Your Grade is <strong>${percentage}%</strong>`;

  progressBar.style.width = `${percentage}%`;
};

gradeForm.addEventListener("submit", a);

