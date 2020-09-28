//Elements
const bodyEl = document.getElementById('body');
const searchInput = document.getElementById('img-search');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

//Initial API call
function initialCall() {
    const KEY = '3745075-25ea91b664602ad040ed4a112';
    const API = `https://pixabay.com/api/?key=${KEY}&image_type=photo`;
    fetch(API)
        .then(response => response.json())
        .then(data => renderItems(data)); 
}
initialCall();

//API call
function handleSubmit(event) {
    const query = searchInput.value;
    const KEY = '3745075-25ea91b664602ad040ed4a112';
    const API = `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo`;
    event.preventDefault();
    fetch(API)
        .then(response => response.json())
        .then(data => renderItems(data)); 

    searchInput.value = "";
}

searchBtn.addEventListener('click', handleSubmit);

//Render items
function renderItems(data) {
    Array.from(data.hits).forEach(object => {
            const li = document.createElement('li');
            const background = `url(${object.largeImageURL})`;
            li.className = 'li-img-btn';
            li.dataset.id = object.id;
            li.style.backgroundImage = background;
                console.log(data);
            searchResults.appendChild(li); 
        }
    ) 
}

//Set background image
function selectBackground(event) {
    bodyEl.style.backgroundImage = event.target.style.backgroundImage;
}
searchResults.addEventListener("click", selectBackground);