const input = document.querySelector(".input");

input.addEventListener("input", () => {
  const listItems = document.querySelectorAll(".list li");
  listItems.forEach((li) => {
    if (li.innerText.includes(input.value)) {
      li.hidden = false;
    } else {
      li.hidden = true;
    }
  });
});

console.log("input working", input);
