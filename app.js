// ------------------------------
// PAGE IDENTIFIER (must be first)
// ------------------------------
const page = document.body.dataset.page;

// ------------------------------
// GLOBAL: Newsletter modal
// ------------------------------
let lastFocusedElement = null;

document.addEventListener("click", (e) => {
  // OPEN
  if (e.target.matches("[data-open-modal]")) {
    lastFocusedElement = e.target;

    e.target.setAttribute("aria-expanded", "true");

    const tpl = document.querySelector("#newsletter-modal");
    document.body.appendChild(tpl.content.cloneNode(true));

    const modal = document.querySelector("[data-modal]");
    modal.querySelector(".modal-close").focus();
  }

  // CLOSE (button or backdrop)
  if (
    e.target.matches("[data-close-modal]") ||
    e.target.matches("[data-modal]")
  ) {
    document.querySelector("[data-modal]")?.remove();

    lastFocusedElement?.focus();
    lastFocusedElement?.setAttribute("aria-expanded", "false");
  }
});

// ------------------------------
// GLOBAL: Theme toggle
// ------------------------------
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

toggle?.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  const nextTheme = isDark ? "light" : "dark";

  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
});

// ------------------------------
// GLOBAL: Mobile nav toggle
// ------------------------------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
  navLinks.classList.toggle("nav-open");
});

// ------------------------------
// GLOBAL: Desktop dropdown menus
// ------------------------------
document.querySelectorAll(".dropdown > button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const isOpen = parent.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
  });
});

// ------------------------------
// GLOBAL: Close mobile nav on link click
// ------------------------------
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("nav-open");
  });
});

// ------------------------------
// ABOUT PAGE: Feedback panel toggle
// ------------------------------
if (page === "about") {
  const feedbackToggle = document.querySelector(".feedback-toggle");
  const feedbackPanel = document.querySelector(".feedback-panel");
  const feedbackCancel = document.querySelector(".feedback-cancel");

  feedbackToggle?.addEventListener("click", () => {
    feedbackPanel.classList.toggle("open");
    feedbackPanel.hidden = !feedbackPanel.classList.contains("open");
  });

  feedbackCancel?.addEventListener("click", () => {
    feedbackPanel.classList.remove("open");
    feedbackPanel.hidden = true;
  });
}

// ------------------------------
// ACTIVITIES + SEASONAL: Booking form toggle
// ------------------------------
if (page === 'activities' || page === 'seasonal') {

  const openBtn = document.getElementById('openBooking');
  const closeBtn = document.getElementById('closeBooking');
  const overlay = document.getElementById('bookingOverlay');

  openBtn?.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  closeBtn?.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  // Close when clicking outside the form
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
}