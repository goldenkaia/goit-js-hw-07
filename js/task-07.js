const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
inputEl.addEventListener("input", onInput);
function onInput(e) {
  const value = e.target.value;
  spanEl.style.fontSize = value + "px";
}
