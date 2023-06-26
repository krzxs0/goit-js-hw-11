import {getImages} from "./api.js";

let inputElement = document.getElementById('inputSearch')
let button = document.getElementById('submitButton')
let loadmore = document.getElementsByClassName('load-more')[0]
let galleryList = document.querySelector('.gallery');
let pageCounter = 1

loadmore.onclick = async () => {
    let query = await getImages(inputElement.value, pageCounter)

    pageCounter++

    query.data.hits.forEach(hit => {
        photos.push({
            imgURL: hit.webformatURL,
            tags: hit.tags,
            likes: hit.likes,
            views: hit.views,
            comments: hit.comments,
            downloads: hit.downloads
        })
    });

    galleryList.innerHTML = photos.map(createGalleryItem).join('')
}

let photos = []

button.onclick = async () => {
    if(inputElement.value.length == 0) return Notiflix.Notify.failure('Please enter something and try again!');

    let query = await getImages(inputElement.value)

    if(query.data.totalHits == 0) return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    else Notiflix.Notify.success(`Hooray! we found ${query.data.totalHits}`)

    loadmore.style.display = 'block'

    query.data.hits.forEach(hit => {
        photos.push({
            imgURL: hit.webformatURL,
            tags: hit.tags,
            likes: hit.likes,
            views: hit.views,
            comments: hit.comments,
            downloads: hit.downloads
        })
    });

    galleryList.innerHTML = photos.map(createGalleryItem).join('')

    pageCounter++
    
    photos = []
}


const createGalleryItem = ({ imgURL, tags, likes, views, comments, downloads }) => `
<div class="photo-card">
        <img src="${imgURL}" alt="${tags}" loading="lazy" />
        
        <div class="info">
          <p class="info-item">
            <b>Likes ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads ${downloads}</b>
          </p>
        </div>
 </div>
`;
const handleKeyPress = async (event) => {
  if (event.key === 'Enter') {
    await searchImages();
  }
};
