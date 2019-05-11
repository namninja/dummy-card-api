"use strict";

function renderCards(data) {
  console.log("renderCards ran");
  console.log(data);
  let cards = "";
  for (let i = 0; i < 3; i++) {
    cards += `
    <div class="card">
      <img class="card-img" src="${data[i].image_url}" alt="${data[i].title}">
      <div class="card-content">
        <div class="card-heading">
          <img id="mindera-glasses-logo" src="./images/large_glasses.png" alt="mindera glasses logo">
          <div class="card-heading-text">
            <h1>${data[i].title}</h1>
            <h3>WHAT WILL YOU FIND HERE</h3>
          </div>
        </div>
        <p class="card-text">${data[i].text}</p>
        <a href="https://mindera.com/">Learn More</a>
      </div>
    </div>
    `;
  }
  $(".cards").html(cards);
}

function getCards() {
  console.log("getCards ran");
  const url = `http://localhost:3000/cards`;
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => renderCards(responseJson))
    .catch(err => {
      console.log(err.message);
    });
}

function displayCards() {
  console.log("displayCards ran");
  let cards = getCards();
  $(".cards").html(cards);
}

$(function() {
  displayCards();
  console.log("App loaded! Waiting for submit!");
});
