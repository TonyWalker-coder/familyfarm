// ------------------------------
// page selector (**must be first**)
// ------------------------------
const page = document.body.dataset.page;

// ------------------------------
// **GLOBAL** newsletter modal
// ------------------------------
let lastFocusedElement = null;
// ------------------------------
// Shop & Cafe slideshows
// ------------------------------
if (page === "shopandcafe") {
  createSlideshow("#slideshow1");
  createSlideshow("#slideshow2");
  createSlideshow("#slideshow3");
}

document.addEventListener("click", (e) => {
  //open
  if (e.target.matches("[data-open-modal]")) {
    lastFocusedElement = e.target;

    e.target.setAttribute("aria-expanded", "true");

    const tpl = document.querySelector("#newsletter-modal");
    document.body.appendChild(tpl.content.cloneNode(true));

    const modal = document.querySelector("[data-modal]");
    modal.querySelector(".modal-close").focus();
  }

  //close (button or backdrop)
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
// **GLOBAL** theme toggle
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
// **GLOBAL** mobile nav toggle
// ------------------------------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
  navLinks.classList.toggle("nav-open");
});

// ------------------------------
// **GLOBAL** desktop dropdown menus
// ------------------------------
document.querySelectorAll(".dropdown > button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const isOpen = parent.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
  });
});

// ------------------------------
// **GLOBAL** close mobile nav on link click
// ------------------------------
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("nav-open");
  });
});

// ------------------------------
// aboutus feedback form
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
// -----------------------------
// shop slide show
// -----------------------------
function createSlideshow(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  let index = 1;
  const slides = container.querySelectorAll(".mySlides");
  const dots = container.querySelectorAll(".dot");

  function show(n) {
    if (n > slides.length) index = 1;
    if (n < 1) index = slides.length;

    slides.forEach((s) => (s.style.display = "none"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[index - 1].style.display = "block";
    dots[index - 1].classList.add("active");
  }

  container.querySelector(".prev")?.addEventListener("click", () => {
    show((index += 1));
  });

  container.querySelector(".next")?.addEventListener("click", () => {
    show((index -= 1));
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      show((index = i + 1));
    });
  });

  show(index);
}
// ------------------------------
//activities booking form toggle
// ------------------------------
if (page === "activities" || page === "seasonal") {
  const bookingOverlay = document.getElementById("bookingOverlay");
  const closeBooking = document.getElementById("closeBooking");
  const bookingButton = document.getElementById("bookingButton");

  //open booking form
  bookingButton?.addEventListener("click", () => {
    bookingOverlay.classList.add("active");
    document.body.classList.add("booking-open"); // lock scroll
  });

  //close booking form
  closeBooking?.addEventListener("click", () => {
    bookingOverlay.classList.remove("active");
    document.body.classList.remove("booking-open"); // unlock scroll
  });

  //close when clicking outside the form
  bookingOverlay?.addEventListener("click", (e) => {
    if (e.target === bookingOverlay) {
      bookingOverlay.classList.remove("active");
      document.body.classList.remove("booking-open");
    }
  });
}
// ------------------------------
// historical slideshow gallery
// ------------------------------

// Find every .slideshow component on the page and initialise each one
document.querySelectorAll(".slideshow").forEach(initThumbnailSlideshow);

function initThumbnailSlideshow(slideshow) {
  // Cache all the scoped elements inside this slideshow instance
  const mainImage = slideshow.querySelector(".main-image img");
  const thumbs = slideshow.querySelectorAll(".thumb");
  const prev = slideshow.querySelector(".prev");
  const next = slideshow.querySelector(".next");

  // Track the currently displayed image index
  let index = 0;

  // Show a specific image, optionally triggered by user interaction
  function show(i, userTriggered = false) {
    index = (i + thumbs.length) % thumbs.length;
    mainImage.src = thumbs[index].src;

    thumbs.forEach((t) => t.classList.remove("active"));
    thumbs[index].classList.add("active");

    // Only auto-scroll thumbnails when the user interacts
    if (userTriggered) {
      thumbs[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  // Clicking a thumbnail jumps directly to that image
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => show(i, true));
  });

  // Prev/next buttons move relative to the current index
  prev.addEventListener("click", () => show(index - 1, true));
  next.addEventListener("click", () => show(index + 1, true));

  // Initialise the slideshow with the first image (no auto-scroll)
  show(0);
}
