// ------------------------------
//page selector (**must be first**)
// ------------------------------
const page = document.body.dataset.page;
// ------------------------------
//**GLOBAL** newsletter modal
// ------------------------------
let lastFocusedElement = null;
// ------------------------------
//shop & Cafe slideshows
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
//**GLOBAL** theme toggle
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
//**GLOBAL** mobile nav toggle
// ------------------------------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
  navLinks.classList.toggle("nav-open");
});

// ------------------------------
//**GLOBAL** desktop dropdown menus
// ------------------------------
document.querySelectorAll(".dropdown > button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const isOpen = parent.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
  });
});

// ------------------------------
//**GLOBAL** close mobile nav on link click
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
  const feedbackClose = document.querySelector(".feedback-close");

  feedbackPanel.hidden = true;
  feedbackPanel.setAttribute("aria-hidden", "true");

  function openFeedback() {
    feedbackPanel.hidden = false;
    feedbackPanel.classList.add("open");
    feedbackPanel.setAttribute("aria-hidden", "false");
    feedbackToggle.setAttribute("aria-expanded", "true");
  }

  function closeFeedback() {
    feedbackPanel.classList.remove("open");
    feedbackPanel.setAttribute("aria-hidden", "true");
    feedbackToggle.setAttribute("aria-expanded", "false");

    setTimeout(() => {
      feedbackPanel.hidden = true;
    }, 350);
  }

  feedbackToggle.addEventListener("click", openFeedback);
  feedbackCancel.addEventListener("click", closeFeedback);
  feedbackClose.addEventListener("click", closeFeedback);

  document.addEventListener("click", (event) => {
    const isInside = feedbackPanel.contains(event.target);
    const isToggle = event.target === feedbackToggle;

    if (!isInside && !isToggle && feedbackPanel.classList.contains("open")) {
      closeFeedback();
    }
  });
}
// -----------------------------
// Shop slide show
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

  // Corrected directions
  container.querySelector(".prev")?.addEventListener("click", () => {
    show((index -= 1));
  });

  container.querySelector(".next")?.addEventListener("click", () => {
    show((index += 1));
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      show((index = i + 1));
    });
  });

  show(index);
}

//initialise all slideshows
createSlideshow("#slideshow1");
createSlideshow("#slideshow2");
createSlideshow("#slideshow3");

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
  //close booking form (X button + cancel button)
  document.querySelectorAll(".close-form").forEach((btn) => {
    btn.addEventListener("click", () => {
      bookingOverlay.classList.remove("active");
      document.body.classList.remove("booking-open");
    });
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
//historical slideshow gallery
// ------------------------------

//find every .slideshow component on the page and initialise each one
document.querySelectorAll(".slideshow").forEach(initThumbnailSlideshow);

function initThumbnailSlideshow(slideshow) {
  //cache all the scoped elements inside this slideshow instance
  const mainImage = slideshow.querySelector(".main-image img");
  const thumbs = slideshow.querySelectorAll(".thumb");
  const prev = slideshow.querySelector(".prev");
  const next = slideshow.querySelector(".next");

  //track the currently displayed image index
  let index = 0;

  //show a specific image, optionally triggered by user interaction
  function show(i, userTriggered = false) {
    index = (i + thumbs.length) % thumbs.length;

    mainImage.src = thumbs[index].src;
    mainImage.alt = thumbs[index].alt; // keep alt text in sync

    thumbs.forEach((t, idx) => {
      t.classList.remove("active");
      t.setAttribute("aria-pressed", "false");
    });

    thumbs[index].classList.add("active");
    thumbs[index].setAttribute("aria-pressed", "true");

    if (userTriggered) {
      thumbs[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  //clicking a thumbnail jumps directly to that image
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => show(i, true));
  });

  //prev/next buttons move relative to the current index
  prev.addEventListener("click", () => show(index - 1, true));
  next.addEventListener("click", () => show(index + 1, true));

  //initialise the slideshow with the first image (no auto-scroll)
  show(0);
}
