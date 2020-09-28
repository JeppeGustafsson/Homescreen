const quoteHolder = document.getElementById('quoteHolder');
const authorHolder = document.getElementById('authorHolder');


function getQuote() {
    const API = "http://quotes.rest/qod.json?category=inspire";
    fetch(API)
    .then(response => response.json())
    .then(data => passData(data));
}

function passData(data) {
    console.log(data);
    quoteHolder.innerHTML = data.contents.quotes[0].quote;
    authorHolder.innerHTML = data.contents.quotes[0].author;
}

getQuote();