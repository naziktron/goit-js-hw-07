import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imgEl = createImg(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imgEl);
// galleryContainer.addEventListener('click',onContainerClick);
const imgelTarget = document.querySelector('.gallery__image');

// console.log(galleryItems);

function createImg(galleryEl) {
  return galleryEl
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
        `;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
