// Example script for destination choice
const chooseBtns = document.querySelectorAll(".choose-btn");

chooseBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const country = btn.parentElement.querySelector("h3").innerText;
    alert(`You selected ${country}! Cruises available soon.`);
  });
});
