// Current year
/*const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;*/

let isCopying = false;

const copyEmail = () => {
  if (isCopying) return;

  isCopying = true;

  const email = "djordje@jovicweb.dev";
  const boxFiveBtn = document.querySelector(".box-5-btn");
  const originalText = boxFiveBtn.innerHTML;

  // Change button text
  navigator.clipboard.writeText(email).then(() => {
    boxFiveBtn.innerHTML =
      'Copied <ion-icon name="checkmark-outline" class ="copied-message-icon"></ion-icon>';
  });

  // Reset after 2 seconds
  setTimeout(() => {
    boxFiveBtn.innerHTML = originalText;
  }, 2000);
};

const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dot");

// Click on dots to scroll to slide
if (track && dots.length > 0) {
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      const slideWidth = track.querySelector(".carousel-slide").offsetWidth;
      track.scrollTo({
        left: slideWidth * slideIndex,
        behavior: "smooth",
      });
    });
  });

  // Update active dot on scroll
  track.addEventListener("scroll", () => {
    const slideWidth = track.querySelector(".carousel-slide").offsetWidth;
    const currentIndex = Math.round(track.scrollLeft / slideWidth);

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  });
}
const closeBtn = document.querySelector(".about-icon-holder");

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.history.back();
});
