import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery=document.querySelector(".gallery");

function createGalleryItem(galleryItems){
    return galleryItems.map(({preview, original,description})=>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`)
  .join('');
}


const items=createGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", items);

gallery.addEventListener('click', onClick);
function onClick(evt){
    evt.preventDefault();
    if(!evt.target.classList.contains("gallery__image"))
    return;


const instance = basicLightbox.create(`
<img src="${evt.target.dataset.source}" width="800" height="600">`,
{
onShow:()=>{
document.addEventListener('keydown', keyEsc)},
onClose:()=>{
document.removeEventListener('keydown', keyEsc)},
});

const keyEsc=(evt)=>{
    if(evt.key==="Escape"){
instance.close();
    }
};
instance.show();}

console.log(galleryItems);