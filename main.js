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

  // Initialize Lenis Smooth Scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });

  // Custom Scrollbar Sync
  const scrollbarThumb = document.querySelector('.scrollbar-thumb');
  const updateScrollbar = (scroll) => {
    if (!scrollbarThumb) return;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollRatio = clientHeight / scrollHeight;

    // Update thumb height
    const thumbHeight = clientHeight * scrollRatio;
    scrollbarThumb.style.height = `${thumbHeight}px`;

    // Update thumb position
    const maxScroll = scrollHeight - clientHeight;
    const progress = scroll / maxScroll;
    const thumbTop = (clientHeight - thumbHeight - 10) * progress; // 10px padding for top/bottom
    scrollbarThumb.style.transform = `translateY(${thumbTop}px)`;
  };

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on('scroll', (e) => {
    updateScrollbar(e.scroll);
  });

  // Initial update
  setTimeout(() => updateScrollbar(window.scrollY), 500);

  // Intro Screen Logic
  const startBtn = document.getElementById('start-btn');
  const introOverlay = document.getElementById('intro-overlay');
  const bgm = document.getElementById('bgm');
  const heroVideo = document.querySelector('.hero-video');
  const audioControl = document.getElementById('audio-control');
  const bgmToggle = document.getElementById('bgm-toggle');
  const contactBtn = document.getElementById('contact-btn');
  const contactControl = document.getElementById('contact-control');

  if (startBtn && introOverlay) {
    if (bgm) bgm.volume = 0.2; // Adjusted to 20%

    startBtn.addEventListener('click', () => {
      // Play Video
      if (heroVideo) {
        heroVideo.play().catch(err => console.log('Video Play failed:', err));
      }

      // Hide Intro Screen
      introOverlay.classList.add('hidden');

      // Scroll to Top (Instant) and Unlock Scroll
      document.body.classList.remove('no-scroll');
      lenis.scrollTo(0, { immediate: true });

      // Show Controls
      if (audioControl) audioControl.classList.add('visible');
      if (contactControl) contactControl.classList.add('visible');
    });
  }

  // BGM Toggle Logic
  if (bgmToggle && bgm) {
    // Initial state from localStorage
    let bgmEnabled = localStorage.getItem('bgm_enabled') !== 'false'; // Default to true

    const updateBgmUI = (isEnabled) => {
      if (!isEnabled) {
        bgmToggle.classList.add('muted');
        bgmToggle.querySelector('.status-text').textContent = 'OFF';
      } else {
        bgmToggle.classList.remove('muted');
        bgmToggle.querySelector('.status-text').textContent = 'ON';
      }
    };

    // Initialize UI based on stored state
    updateBgmUI(bgmEnabled);

    // Update start button logic to respect preference
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        if (bgmEnabled) {
          bgm.play().catch(err => console.log('BGM Play failed:', err));
        }
      });
    }

    bgmToggle.addEventListener('click', () => {
      if (bgm.paused && bgmEnabled) { // If paused but enabled, play it (manual toggle)
        bgm.play();
      } else if (!bgm.paused) {
        bgm.pause();
        bgmEnabled = false;
      } else {
        bgmEnabled = true;
        // Only play if we are past the intro
        if (introOverlay && introOverlay.classList.contains('hidden')) {
          bgm.play();
        }
      }

      bgmEnabled = !bgm.paused;
      localStorage.setItem('bgm_enabled', bgmEnabled);
      updateBgmUI(bgmEnabled);
    });

    // Keyboard Shortcut (ESC to toggle/stop BGM)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!bgm.paused) {
          bgm.pause();
          bgmEnabled = false;
          localStorage.setItem('bgm_enabled', bgmEnabled);
          updateBgmUI(false);
        }
      }
    });
  }

  // 3D Tilt Effect Logic
  const initTilt = (targets, intensity = 15, listener = null) => {
    targets.forEach(target => {
      const activeArea = listener || target;

      activeArea.addEventListener('mousemove', (e) => {
        const rect = activeArea.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -intensity;
        const rotateY = ((x - centerX) / centerX) * intensity;

        target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      activeArea.addEventListener('mouseleave', () => {
        target.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });
  };

  // Initialize Tilt with expanded reaction areas
  initTilt(document.querySelectorAll('.intro-content'), 10, document.getElementById('intro-overlay'));
  initTilt(document.querySelectorAll('.hero-content'), 10, document.getElementById('hero'));
  initTilt(document.querySelectorAll('.gate-card'), 15);

  // Mouse Particle Tail Logic (Magical Universe Theme)
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0, active: false };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 4; // Slightly larger for heart shape
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        // Holy Princess Yellow/Gold palette
        const colors = ['#FFD700', '#FFEA00', '#FFF44F', '#FFDF00', '#F4C430'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 1;
        this.life = 1;
        this.decay = Math.random() * 0.015 + 0.005;
        this.rotation = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.alpha = this.life;
        if (this.size > 0.1) this.size -= 0.05;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;

        // Draw Heart Shape
        const s = this.size;
        ctx.beginPath();
        ctx.moveTo(0, s / 4);
        ctx.quadraticCurveTo(0, 0, s / 4, 0);
        ctx.quadraticCurveTo(s / 2, 0, s / 2, s / 4);
        ctx.quadraticCurveTo(s / 2, s / 2, 0, s * 0.9);
        ctx.quadraticCurveTo(-s / 2, s / 2, -s / 2, s / 4);
        ctx.quadraticCurveTo(-s / 2, 0, -s / 4, 0);
        ctx.quadraticCurveTo(0, 0, 0, s / 4);
        ctx.fill();

        // Add holy glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.restore();
      }
    }

    const handleParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Emit particles on move
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    };

    animate();
  }

  console.log('LandVerse Portfolio Initialized');
});
