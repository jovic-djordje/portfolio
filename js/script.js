// Current year
/*const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;*/

const copyEmail = () => {
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
