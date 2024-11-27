const belt = document.querySelector('.asteroid-belt');

// Add asteroids dynamically
for (let i = 0; i < 30; i++) {
  const asteroid = document.createElement('div');
  asteroid.classList.add('asteroid');
  asteroid.style.top = `${Math.random() * 100}%`;
  asteroid.style.left = `${Math.random() * 100}%`;
  belt.appendChild(asteroid);
}
