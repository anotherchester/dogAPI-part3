"use strict";

let dogBreed = '';

function getDogImage() {
  fetch("https://dog.ceo/api/breed/" + dogBreed + "/images/random")
  .then(response => {
    if(response.ok){
        return response.json();
    }else{
        // skips next .then and goes to .catch
        throw new Error();
    }
})
.then(responseJson => displayResults(responseJson))
.catch(error => errorHandle());
};

function displayResults(responseJson) {
  $('.results').html(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}

function watchGetForm() {
  $("#getDogs").submit(event => {
    event.preventDefault();
    dogBreed = $(".howManyDogs").val().toLowerCase();
    getDogImage();
  });
}

function errorHandle() {
  resetResults();
  $('.results').append(`<h3>This breed has not been found!</h3>`);
  $('.results').removeClass('hidden');
};

function resetResults(){
  $('.results').empty();
};

function startDog() {
  watchGetForm();

}

$(startDog);
