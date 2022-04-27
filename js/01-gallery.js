import { galleryItems } from './gallery-items.js';


// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const imgEl = createImg(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend',imgEl);
galleryContainer.addEventListener('click',onContainerClick);
const  imgelTarget = document.querySelector('.gallery__image');

// console.log(galleryItems);

function createImg (galleryEl) {
    return galleryEl.map(({preview,original,description})=>{
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
    }).join('')
}

// function onContainerClick(e){
//   const galeryEltarget = e.target.classList.contains('gallery__image');
//       if(!galeryEltarget){
//           return;
//       }
      
//       e.preventDefault();
//       modalWindow(e.target.dataset.source)
      
// }
// function modalWindow(e){
//   imgelTarget.classList.add('is__open__modal')
//   imgelTarget.src = e
// }





function onContainerClick(e) {
  
    const galeryEltarget = e.target.classList.contains('gallery__image');
    if(!galeryEltarget){
        return;
    }

    e.preventDefault();
    modalWindow(e.target.dataset.source);
    }

function modalWindow(e){
  const instance = basicLightbox.create(`
  <img src="${e}"  width="800" height="600">
`);


instance.show();
closeModalBtnEsc();

function closeModalBtnEsc(){
  window.addEventListener('keydown', onCloseModal);
  
}
function onCloseModal(e){
  
  if(e.code==='Escape') {
    console.log(e.code)
    instance.close()
  }


}


}












