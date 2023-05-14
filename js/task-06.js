const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onBlur);
function onBlur(e) {
  const length = Number(e.target.dataset.length);
  const value = e.target.value.trim();
  const bool = length === value.length;
  inputEl.classList.toggle("valid", bool);
  inputEl.classList.toggle("invalid", !bool);
}
