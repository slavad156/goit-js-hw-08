import galleryTpl from '../templates/gallery.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

function createGalleryMarkup(items) {
  return galleryTpl(items);
}

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['⇦', '⇨'],
});

console.log(galleryItems);
