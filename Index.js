'use strict';


function displayResults(responseJson) {
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}


function fetchRandomImage() {
 fetch('https://dog.ceo/api/breeds/image/random')
 .then(response => response.json())
 .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function main() {
  $('form').submit((event) => {
    event.preventDefault();
    fetchRandomImage();
  });
}


 $(main);