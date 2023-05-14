const formEl = document.querySelector("form");
formEl.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const { email: emailEl, password: passwordEl } = e.target.elements;
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();
  if (!(email && password)) {
    return alert("Text text");
  }
  const data = { email, password };
  console.log(data);
  e.target.reset();
}
