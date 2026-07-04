document.documentElement.classList.add("reveal-ready");
const themeToggle = document.querySelector("#themeToggle");
const achievementToast = document.querySelector("#achievementToast");
const achievementText = document.querySelector("#achievementText");
const currentYear = document.querySelector("#currentYear");
const revealedAchievements = new Set();
let toastTimer;

function showAchievement(message) {
  if (!message || revealedAchievements.has(message)) {
    return;
  }

  revealedAchievements.add(message);
  achievementText.textContent = message;
  achievementToast.classList.add("show");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    achievementToast.classList.remove("show");
  }, 2600);
}

function setupSectionObserver() {
  const sections = document.querySelectorAll(".section-reveal");

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        showAchievement(entry.target.dataset.achievement);
      });
    },
    { threshold: 0.28 }
  );

  sections.forEach((section) => observer.observe(section));
}

themeToggle.addEventListener("click", () => {
  const isDayMode = document.body.classList.toggle("day-mode");
  themeToggle.setAttribute("aria-pressed", String(isDayMode));
  themeToggle.textContent = isDayMode ? "Night Mode" : "Day Mode";
});

currentYear.textContent = new Date().getFullYear();
setupSectionObserver();
