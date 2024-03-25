const input = document.querySelector(".list");

input.addEventListener(".input", () => {
  const listItems = document.querySelectorAll(".list li");
  listItems.forEach((li) => {
    if (li.innerText.includes(input.value)) return (li.hidden = false);
    return (li.hidden = true);
  });
});

console.log("input working", input);
