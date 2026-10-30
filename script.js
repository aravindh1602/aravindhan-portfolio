/* =====================================================
   PORTFOLIO SCRIPT: Aravindhan Balamurugan
   Section 1 below is the ONLY part you need to edit
   to add your links, photo and contact-form service.
   ===================================================== */

/* ---------- 1. YOUR SETTINGS (edit these) ---------- */

// Paste full URLs between the quotes, e.g. "https://github.com/yourname".
// Anything left as "" shows as a dimmed placeholder ([Add ... URL]).
const LINKS = {
  github:   "https://github.com/aravindh1602",   // [Add GitHub URL]
  linkedin: "https://www.linkedin.com/in/arav1ndh22/",   // [Add LinkedIn URL]
  project1: "https://github.com/aravindh1602/Traffic_light",   // [Add GitHub URL] Ambulance & traffic signal
  project2: "https://github.com/aravindh1602/toyota",   // [Add GitHub URL] Smart vehicle & accident detection
  project3: "https://github.com/aravindh1602/CAN",   // [Add GitHub URL] CAN battery monitoring
  project4: "https://github.com/aravindh1602/zigbee"    // [Add GitHub URL] Zigbee smart home
};

// Profile photo: put an image next to index.html and type its name, e.g. "photo.jpg".
// Leave "" to show the "AB" initials ([Add Profile Photo]).
const PROFILE_IMAGE = "profile.jpeg";

// Contact form: paste a form-service URL (e.g. "https://formspree.io/f/xxxxxxx").
// Leave "" and the form opens the visitor's email app instead.
const FORM_ENDPOINT = "";
const CONTACT_EMAIL = "ab1459@srmist.edu.in";

/* ---------- 2. Small helpers ---------- */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const toastEl = $("#toast");
let toastTimer;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3200);
}

/* ---------- 3. Apply link settings ---------- */
// Every element with data-link="github" (etc.) gets its URL from LINKS.
$$("[data-link]").forEach((el) => {
  const url = (LINKS[el.dataset.link] || "").trim();
  if (url) {
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  } else {
    // No URL yet: keep the element on the page but make it harmless
    el.classList.add("is-placeholder");
    el.title = "Link not added yet";
    el.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("This link isn't added yet. Add the URL in script.js (LINKS).");
    });
  }
});

/* ---------- 4. Profile photo ---------- */
if (PROFILE_IMAGE.trim()) {
  const avatar = $("#avatar");
  const img = new Image();
  img.src = PROFILE_IMAGE;
  img.alt = "Aravindhan Balamurugan";
  img.onload = () => { avatar.innerHTML = ""; avatar.appendChild(img); }; // keep initials if the file is missing
}

/* ---------- 5. Mobile menu ---------- */
const navToggle = $("#navToggle");
const navMenu = $("#navMenu");

function setMenu(open) {
  navMenu.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}
navToggle.addEventListener("click", () => setMenu(!navMenu.classList.contains("open")));
// Close the menu after choosing a link, or with the Escape key
$$(".nav-link").forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("open")) { setMenu(false); navToggle.focus(); }
});

/* ---------- 6. Header style, back-to-top ---------- */
const header = $("#header");
const toTop = $("#toTop");
function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 20);
  toTop.classList.toggle("show", window.scrollY > 600);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- 7. Active navigation highlighting ---------- */
const sections = $$("main section[id]");
const navLinks = $$(".nav-link");
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => {
          const active = l.getAttribute("href") === "#" + entry.target.id;
          l.classList.toggle("active", active);
          if (active) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" }); // a section is "current" when it crosses the middle of the screen
  sections.forEach((s) => spy.observe(s));
}

/* ---------- 8. Scroll reveal animation ---------- */
const revealEls = $$(".reveal");
if ("IntersectionObserver" in window) {
  const revealer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => revealer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible")); // old browsers: just show everything
}



/* ---------- 10. Footer year ---------- */
$("#year").textContent = new Date().getFullYear();
