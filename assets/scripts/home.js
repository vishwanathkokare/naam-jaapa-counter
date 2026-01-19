/* count for counting */
let count = 0;

/* getting elements */
const countParagraph = document.querySelector(".counts");
const addCountBtn = document.querySelector(".add-btn");
const removeCountBtn = document.querySelector(".remove-btn");

/* intial counts */
countParagraph.textContent = count;

if (count == 0) {
  removeCountBtn.style.display = "none";
}

/* couting on clicking buttons */
addCountBtn.addEventListener("click", () => {
  count = count + 1;
  // update it on increase
  countParagraph.textContent = count;
  if (count > 0) {
    removeCountBtn.style.display = "block";
  }
});

removeCountBtn.addEventListener("click", () => {
  // check if it is greater than zero only then works
  if (count > 0) {
    count = count - 1;
    countParagraph.textContent = count;
    if (count == 0) {
      removeCountBtn.style.display = "none";
    }
  }
  // update it on decrease
});
