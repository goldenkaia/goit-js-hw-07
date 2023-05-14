const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onInput);
function onInput(e) {
  const value = e.target.value.trim();
  spanEl.textContent = value !== "" ? value : "Anonymous";
}
