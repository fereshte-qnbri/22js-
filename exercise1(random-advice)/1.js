const adviceText = document.getElementById('advice-text');
const adviceButton = document.getElementById('advice-button');

async function fetchAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const advice = data.slip.advice;
    adviceText.innerText = advice;
  } catch (error) {
    console.error('Error fetching advice:', error);
    adviceText.innerText = 'Error: Could not retrieve advice.';
  }
}

adviceButton.addEventListener('click', fetchAdvice);

fetchAdvice();