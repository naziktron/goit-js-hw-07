import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imgEl = createImg(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imgEl);
galleryContainer.addEventListener('click', onContainerClick);
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

function onContainerClick(e) {
  const galeryEltarget = e.target.classList.contains('gallery__image');
  if (!galeryEltarget) {
    return;
  }

  e.preventDefault();
  modalWindow(e.target.dataset.source);
}
let instance;

function modalWindow(e) {
  instance = basicLightbox.create(
    `
  <img src="${e}"  width="800" height="600">
`,
    {
      onShow: instance => {
        addListener();
      },
      onClose: instance => {
        removeListener();
      },
    }
  );
  instance.show();
}

function addListener() {
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener('keydown', onEscClick);
}
