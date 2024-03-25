// skapa en map  - sedan skapar du vart den ska läggas
const button = document.querySelector(".button");
button.addEventListener("click", () => {
  let Oldvalue = parseInt(button.innerText, 10);
  button.innerText = Oldvalue + 1;
});
console.log("working", button);
