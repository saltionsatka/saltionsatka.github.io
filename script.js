// Fade in when a .reveal element enters the viewport,
// fade out again when it leaves (both scrolling down and up).

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is inside viewport -> fade in
        entry.target.classList.add("visible");
      } else {
        // Element completely outside viewport -> fade out
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    // 0.15 = element is considered "visible" when at least 15% is in view
    threshold: 0.15,
  }
);

// Observe every .reveal element
revels.forEach((el) => observer.observe(el));

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
