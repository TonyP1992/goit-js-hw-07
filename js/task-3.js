const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const trimmedName = input.value.trim();

  if (trimmedName === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = trimmedName;
  }
});
