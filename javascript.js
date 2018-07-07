// querySelectors

var websiteTitleInput = document.querySelector("#website-title");
var websiteURLInput = document.querySelector("#website-url");
var enterButton = document.querySelector("#enter-button");
var readButton = document.querySelector("#read-btn");
var deleteButton = document.querySelector("#delete-btn");

// addEventListeners
enterButton.addEventListener("click", submitInput);
websiteTitleInput.addEventListener("keyup", disabledButton);
websiteURLInput.addEventListener("keyup", disabledButton);
readButton.addEventListener("click", markRead);
deleteButton.addEventListener("click", deleteArticle);

// functions
function enterButton() {
  // create new article and populate with website title, URL
}

function disabledButton() {
  if (websiteTitleInput.length > 0 && websiteURLInput > 0) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}

function markRead() {
  if (readButton.classList.contains(read) {
    readButton.classList.remove(read);
  } else {
    readButton.classList.add(read);
  }
}

function deleteArticle() {
  // delete the article card
}