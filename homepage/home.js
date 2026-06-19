// ---- Page Routing ----
function showPage(pageId) {
  const target = document.getElementById("page-" + pageId);
  if (!target) return;

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  target.classList.add("active");

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  closeMenu();

  history.pushState(null, "", "#" + pageId);
}

// ---- Browser back/forward ----
window.addEventListener("popstate", () => {
  const hash = location.hash.replace("#", "") || "home";
  showPage(hash);
});

// ---- Page load ----
window.addEventListener("DOMContentLoaded", () => {
  const hash = location.hash.replace("#", "") || "home";
  showPage(hash);

  animateStats();
  initScrollReveal();
});

// ---- Tactics Filtering ----
// Keep this here in case you later add a tactics section to the homepage.
// Your current tactics page is separate, so this probably will not run.
function filterTactics(category, btn) {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.classList.remove("active");
  });

  if (btn) {
    btn.classList.add("active");
  }

  document.querySelectorAll(".tactic-card").forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.classList.remove("hidden");
      card.style.animation = "none";
      void card.offsetWidth;
      card.style.animation = "fadeInUp 0.35s ease forwards";
    } else {
      card.classList.add("hidden");
    }
  });
}

// ---- Stat Counter Animation ----
function animateStats() {
  const stats = document.querySelectorAll(".stat-num");

  stats.forEach((stat) => {
    stat.style.opacity = "0";
    stat.style.transform = "translateY(12px)";
    stat.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;

          setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }, 100);

          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => observer.observe(stat));
}

// ---- Scroll Reveal ----
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".feature-card, .tactic-card, .res-card, .visual-card"
  );

  revealElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = `opacity 0.5s ease ${(index % 4) * 0.08}s, transform 0.5s ease ${(index % 4) * 0.08}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

// ---- Navbar scroll effect ----
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");

  if (nav) {
    nav.style.boxShadow =
      window.scrollY > 10 ? "0 2px 20px rgba(0,0,0,0.4)" : "none";
  }
});

// ---- Resources Filtering ----
function filterResources(category, btn) {
  document.querySelectorAll(".res-filter-btn").forEach((button) => {
    button.classList.remove("active");
  });

  if (btn) {
    btn.classList.add("active");
  }

  document.querySelectorAll(".res-card").forEach((card) => {
    if (category === "all" || card.dataset.resCategory === category) {
      card.classList.remove("hidden");
      card.style.animation = "none";
      void card.offsetWidth;
      card.style.animation = "fadeInUp 0.35s ease forwards";
    } else {
      card.classList.add("hidden");
    }
  });
}

// ---- Mobile menu ----
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu) {
    menu.classList.toggle("open");
  }
}

function closeMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu) {
    menu.classList.remove("open");
  }
}

// ---- Inject card animation keyframe ----
const style = document.createElement("style");

style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

document.head.appendChild(style);