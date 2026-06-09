
// ---- Page Routing ----
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile menu if open
  closeMenu();

  // Update URL hash (nice-to-have for bookmarking)
  history.pushState(null, '', '#' + pageId);
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const hash = location.hash.replace('#', '') || 'home';
  showPage(hash);
});

// On load, check hash
window.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.replace('#', '') || 'home';
  showPage(hash);

  // Animate stat numbers
  animateStats();

  // Animate cards on scroll
  initScrollReveal();
});


// ---- Tactics Filtering ----
function filterTactics(category, btn) {
  // Update button states
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide cards
  document.querySelectorAll('.tactic-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
      card.style.animation = 'none';
      // Trigger reflow
      void card.offsetWidth;
      card.style.animation = 'fadeInUp 0.35s ease forwards';
    } else {
      card.classList.add('hidden');
    }
  });
}


// ---- Stat Counter Animation ----
function animateStats() {
  const stats = document.querySelectorAll('.stat-num');
  stats.forEach(stat => {
    // Simple appearance animation — numbers are text so just fade+slide
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(12px)';
    stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(s => observer.observe(s));
}


// ---- Scroll Reveal ----
function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.feature-card, .tactic-card, .res-card, .visual-card'
  );

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${(i % 4) * 0.08}s, transform 0.5s ease ${(i % 4) * 0.08}s`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}


// ---- Navbar scroll effect ----
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 20px rgba(0,0,0,0.4)'
      : 'none';
  }
});


// ---- Inject card animation keyframe ----
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);