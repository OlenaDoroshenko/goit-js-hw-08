// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const list = document.querySelector('.gallery');

// Create gallery
function createListItemMarkup(array) {
  return array
    .map(elem => {
      const { preview, original, description } = elem;
      return `<a
    class="gallery__item"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`;
    })
    .join('');
}

function insertListItems(items) {
  list.insertAdjacentHTML('beforeend', items);
}

const listItemMarkup = createListItemMarkup(galleryItems);
insertListItems(listItemMarkup);

// simpleLigthBox

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
