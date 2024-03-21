// skapa -> vart ska den läggas
const button = document.querySelector(".button");
button.addEventListener("click", () => {
  const button = document.querySelector(".button");

  const firstName = document.querySelector(".first-name");

  const lastName = document.querySelector(".last-name");

  const fullName = document.querySelector(".full-name");

  const verifyCode = document.querySelector(".verify-code");

  fullName.value = firstName.value + "" + lastName.value;

  console.log("first name", firstName);
  console.log("last name", lastName);
});
