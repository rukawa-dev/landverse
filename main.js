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

  // Intro Screen Logic
  const startBtn = document.getElementById('start-btn');
  const introOverlay = document.getElementById('intro-overlay');
  const bgm = document.getElementById('bgm');
  const heroVideo = document.querySelector('.hero-video');

  if (startBtn && introOverlay) {
    if (bgm) bgm.volume = 0.5;

    startBtn.addEventListener('click', () => {
      // Play Audio
      if (bgm) {
        bgm.play().catch(err => console.log('BGM Play failed:', err));
      }

      // Play Video
      if (heroVideo) {
        heroVideo.play().catch(err => console.log('Video Play failed:', err));
      }

      // Hide Intro Screen
      introOverlay.classList.add('hidden');
    });
  }

  console.log('LandVerse Portfolio Initialized');
});
