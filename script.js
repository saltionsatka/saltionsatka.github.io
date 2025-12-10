// Reveal / Hide on scroll (fade-in on scroll down, fade-out on scroll up)

const reveals = document.querySelectorAll(".reveal");

function handleReveal() {
  const windowHeight = window.innerHeight;
  const threshold = 120;

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();

    // Fade IN when scroll down
    if (rect.top < windowHeight - threshold) {
      el.classList.add("visible");
    } 
    // Fade OUT when scroll up
    else {
      el.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
