const body = document.body;

// Create stars
for (let i = 0; i < 300; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Randomly assign size classes for depth perspective
  const sizeClass = Math.random() < 0.6 ? 'small' : Math.random() < 0.8 ? 'medium' : 'large';
  star.classList.add(sizeClass);

  // Random position
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  // Random animation delay for staggered twinkling
  star.style.animationDelay = `${Math.random() * 3}s`;

  body.appendChild(star);
}

// Create shooting stars
for (let i = 0; i < 10; i++) {
  const shootingStar = document.createElement('div');
  shootingStar.classList.add('shooting-star');

  // Random position
  shootingStar.style.top = `${Math.random() * 100}vh`;
  shootingStar.style.left = `${Math.random() * 100}vw`;

  // Random animation delay for natural intervals
  shootingStar.style.animationDelay = `${Math.random() * 10}s`;

  body.appendChild(shootingStar);
}
