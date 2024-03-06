const button = document.querySelector(".button");
const inputText = document.querySelector(".input-text");

const handleClick = () => {
  inputText.value = "Input Tepegwt";
};
console.log(handleClick);
handleClick();
button.addEventListener("click", handleClick);
console.log();
