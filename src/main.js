 
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from "izitoast";  
import "izitoast/dist/css/iziToast.min.css";  


 
const searchForm = document.querySelector('.form');
const searchInput = searchForm.querySelector('input[name="search-text"]');


 
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();  

 
  const query = searchInput.value.trim();

 
  if (query === '') {
     
    iziToast.warning({
      title: 'Увага',
      message: 'Будь ласка, введіть пошуковий запит.',
      position: 'topRight',  
    });
    return;  
  }

   
  clearGallery();
 
  showLoader();

  try {
     
    const data = await getImagesByQuery(query);  

  
    if (data.hits.length === 0) {
       
      iziToast.info({
        
        message: 'Sorry, there are no images matching your search query. Please try again!',
        
          position: 'topRight',
      });
    } else {
       
      createGallery(data.hits);
    }

  } catch (error) {
    
     iziToast.error({
        title: 'Помилка',
        message: 'Не вдалося завантажити зображення. Спробуйте пізніше.',
        position: 'topRight',
      });
       
  } finally {
   
    hideLoader();
    
    searchForm.reset();
  }
});
