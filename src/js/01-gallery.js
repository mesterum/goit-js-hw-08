// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('ul.gallery'),
  liTemplate = new DOMParser().parseFromString(
    `<li class="gallery__item">
   <a class="gallery__link">
      <img class="gallery__image" />
   </a>
</li>`,
    'text/html'
  ).body.firstElementChild;

function liForEachGalleryItem(item) {
  const clone = liTemplate.cloneNode(true),
    img = clone.querySelector('img'),
    a = clone.querySelector('a');

  img.src = item.preview;
  img.alt = item.description;
  a.href = item.original;
  return clone;
}

gallery.append(...galleryItems.map(liForEachGalleryItem));

new SimpleLightbox('ul.gallery a', { captionsData: 'alt', captionDelay: 250 });
