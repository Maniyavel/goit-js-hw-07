import { galleryItems } from './gallery-items.js';
// Change code below this line
// доступ до елемента
const gallery=document.querySelector(".gallery");
//Створюю розмітку
function createGalleryItem(galleryItems){
    return galleryItems.map(({preview, original,description})=>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
       
        alt="${description}"
      />
    </a>
  </li>`)
  .join('');
}

//Додаю розмітку в дерево
const items=createGalleryItem(galleryItems);

gallery.insertAdjacentHTML("beforeend", items);
const lightbox = new SimpleLightbox('.gallery a', 
{ 
    captionsData: "alt",
    captionDelay: 250,

 });

 console.log(galleryItems);
