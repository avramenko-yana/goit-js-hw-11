 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

 
const galleryElement = document.querySelector('.gallery');

 
const loaderElement = document.querySelector('.loader'); 

 
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',  
    captionDelay: 250,    
});

 
function createImageCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b><br> ${likes}</p>
        <p class="info-item"><b>Views</b><br> ${views}</p>
        <p class="info-item"><b>Comments</b><br> ${comments}</p>
        <p class="info-item"><b>Downloads</b><br> ${downloads}</p>
      </div>
    </li>
  `;
}

 
export function createGallery(images) {
  
  if (!images || images.length === 0) {
     
    clearGallery();
    return;
  }

 
  const galleryHTML = images.map(image => createImageCard(image)).join('');

   
  galleryElement.innerHTML = galleryHTML;

   
  lightbox.refresh();
}

 
export function clearGallery() {
  galleryElement.innerHTML = '';  
}

 
export function showLoader() {
  if (loaderElement) {
    loaderElement.classList.add('visible');  
  }
}

 
export function hideLoader() {
   if (loaderElement) {
    loaderElement.classList.remove('visible');  
  }
}
