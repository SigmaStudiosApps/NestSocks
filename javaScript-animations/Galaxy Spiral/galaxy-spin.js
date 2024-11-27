const galaxyContainer = document.querySelector('.galaxy-container');

// Add stars dynamically
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  galaxyContainer.appendChild(star);
}
