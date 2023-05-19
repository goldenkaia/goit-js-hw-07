import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
let markup = galleryItems
  .map((galleryItem) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`;
  })
  .join("");

listEl.insertAdjacentHTML("beforeend", markup);
listEl.addEventListener("click", onClick);

let instance = null;

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModalEsc);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", closeModalEsc);
      },
    }
  );

  instance.show();
}

function closeModalEsc(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}
