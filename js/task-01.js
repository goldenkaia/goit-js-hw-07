const categoriesEl = document.querySelector("#categories");

const categories = [...categoriesEl.children];
console.log(`Number of categories: ${categories.length}`);
categoeries.forEach((El) => {
  const title = el.querySelector("h2").textContent;

  const categoryLength = el.querySelectorAll("li").length;
  console.log(`Category: ${title}; Elements: ${categoryLength}`);
});
