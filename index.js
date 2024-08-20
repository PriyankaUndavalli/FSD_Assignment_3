const button = document.getElementById('toggleButton');
const container = document.getElementById('container');
const text = document.getElementById('text');

let toggleState = false;

button.addEventListener('click', () => {
  toggleState = !toggleState;
  
  if (toggleState) {
    button.textContent = 'Reset';
    text.textContent = 'Button clicked, state changed!';
    container.style.backgroundColor = '#FF6347';
    button.classList.add('active');
  } else {
    button.textContent = 'Click Me';
    text.textContent = 'Click the button to toggle the state';
    container.style.backgroundColor = '#007BFF';
    button.classList.remove('active');
  }
});
