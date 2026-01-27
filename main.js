document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));

  // Parallax effect for hero section
  const hero = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    if (hero) {
      hero.style.backgroundPositionY = `${scroll * 0.5}px`;
    }
  });

  // Smooth hover sound effect (optional/placeholder)
  const cards = document.querySelectorAll('.gate-card, .util-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Logic for micro-interactions if needed
    });
  });

  console.log('LandVerse Portfolio Initialized');
});
