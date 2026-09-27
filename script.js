//your JS code here. If required.
const TOTAL_CIRCLES = 5;
let current = 1; 

const circles = document.querySelectorAll('.circle');
const progressLine = document.getElementById('progress-line');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateUI() {
 
  circles.forEach((circle, index) => {
    const stepNumber = index + 1;
    circle.classList.toggle('active', stepNumber <= current);
  });

  
  const fillPercent = ((current - 1) / (TOTAL_CIRCLES - 1)) * 100;
  progressLine.style.width = `${fillPercent}%`;

 
  prevBtn.disabled = current === 1;
  nextBtn.disabled = current === TOTAL_CIRCLES;
}

nextBtn.addEventListener('click', () => {
  if (current < TOTAL_CIRCLES) {
    current++;
    updateUI();
  }
});

prevBtn.addEventListener('click', () => {
  if (current > 1) {
    current--;
    updateUI();
  }
});

updateUI();