const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action = "increment"]');
const valueEl = document.querySelector("#value");
console.log(decrementEl, incrementEl, valueEl);

let counterValue = 0;
decrementEl.addEventListener("click", onClickDecrement);
incrementEl.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  counterValue -= 1;
  updateValue();
}
function onClickIncrement() {
  counterValue += 1;
  updateValue();
}
function updateValue() {
  valueEl.textContent = counterValue;
}
